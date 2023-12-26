import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio, {Element} from 'cheerio';
import { ContentType } from './type';

const openBrowser = async () => {
  const puppeteer = require('puppeteer');

  //1. 크로미움으로 브라우저를 연다. 
  const browser = await puppeteer.launch(); // -> 여기서 여러가지 옵션을 설정할 수 있다.
        
  //2. 페이지 열기
  const page = await browser.newPage();
        
  //3. 링크 이동
  await page.goto(`${process.env.NEXT_PUBLIC_BLOG_URL || ''}`);

  //4. HTML 정보 가지고 온다.
  const content = await page.content();

  console.log(content);
          
  //5. 페이지와 브라우저 종료
  await page.close();
}

const getHtml = async (url : string) => {
  console.log(url);
  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
   // console.log($);

    let content : ContentType[] = [];
    //const ARTICLE_SELECTOR = $("#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div");
    //const ARTICLE_SELECTOR = $(".FlatPostCardList_block__VoFQe > div");
    const ARTICLE_SELECTOR= $("main section > div:nth-child(2) > div:nth-child(3) > div");
    //const Selector = $("main section:first-of-type > div:nth-child(2) > div:nth-child(3)");
   // const classNm = $(".FlatPostCard_block__a1qM7");
    console.log($(".FlatPostCard_block__a1qM7").length);
    console.log($("main section > div:nth-child(2) > div:nth-child(3)").find('p').text());
    console.log($(".FlatPostCard_block__a1qM7"));
 //   console.log(classNm.length);
  //  console.log(classNm[0]);

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
        // head: $(el).find("img").attr('src'),
        // date: $(el).find(".subinfo > span:first-of-type").text(),
        // context: $(el).find("p").text(),
        // href: $(el).find("a:first-child").attr('href'),
        // headline: $(el).find("h2").text(),
        // tags: getTag(el),
        head: $(el).find("img").attr('src'),
        date: $(el).find(".FlatPostCard_subInfo__cT3J6 > span:first-of-type").text(),
        context: $(el).find("p").text(),
        href: $(el).find("a:first-child").attr('href'),
        headline: $(el).find("h2").text(),
        tags: getTag(el),
      };
    });
    
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
 // console.log(article);
  //res.status(200).json(await article)
  openBrowser();
  res.status(200).json(await article);
}