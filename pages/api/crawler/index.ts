import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio, {Element} from 'cheerio';
import { ContentType } from './type';
import puppeteer, { executablePath } from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';

const openBrowser  = async (url: string) => {

  //1. 크로미움으로 브라우저를 연다. 
  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'development' ?
    {
      headless: true,
      executablePath: `${process.env.NEXT_LOCAL_CHROME_PATH||''}`,
    }
    :
    {
      args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    ignoreHTTPSErrors: true
    }
  ); // -> 여기서 여러가지 옵션을 설정할 수 있다.
        
  //2. 페이지 열기
  const page = await browser.newPage();
        
  //3. 링크 이동
  await page.goto(url, {
    waitUntil: "networkidle2" // 500ms 동안 두 개 이상의 네트워크 연결이 없을 때 탐색이 완료되는 것으로 간주
  });

  //4. HTML 정보 가지고 온다.
const content  : string= await page.content();
          
  //5. 페이지와 브라우저 종료
  await page.close();

  return content;
}

const getHtml = async (url : string) => {
  try {  
    const $ = cheerio.load(await openBrowser(url));

    let content : ContentType[] = [];
    const ARTICLE_SELECTOR= $("main section > div:nth-child(2) > div:nth-child(3) > div");

    // FUNCTION get tag
    const getTag = (tagSelector : Element) => {
      let result : string[] = []
      
      const tagList = $(tagSelector).find(".FlatPostCard_tagsWrapper__iNQR3 > a");

      tagList.map((idx,el)=>{
        const tag = $(el).text();
        result[idx] = tag;
      });
    
      return result;
    }

    ARTICLE_SELECTOR.map((idx, el) => {     
      content[idx] = {
        head: $(el).find("img").attr('src'),
        date: $(el).find(".FlatPostCard_subInfo__cT3J6 > span:first-of-type").text(),
        context: $(el).find("p").text(),
        href: $(el).find("a:first-child").attr('href'),
        headline: $(el).find("h2").text(),
        tags: getTag(el),
      };
    });
    console.log(content);
    return content;
  }
  catch(e){
    console.log(e);
  }
}

const article = getHtml(process.env.NEXT_PUBLIC_BLOG_URL || '');

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse)  {  
  res.status(200).json(await article);
}