import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio, {Element} from 'cheerio';
import { ContentType } from '../crawler/type';


// const article = getHtml(process.env.NEXT_PUBLIC_BLOG_URL || '');
const getHtml = async (url : string) => {
  console.log(url);
  try {  
    const $ = cheerio.load(url);
    console.log($);

    let content : any[] = [];
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
    //console.log(content);
    content.push($);
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