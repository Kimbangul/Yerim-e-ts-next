import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio, {Element} from 'cheerio';
import { ContentType } from './type';


const getHtml = async (url : string) => {
  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

    let content : ContentType[] = [];
    const ARTICLE_SELECTOR = $("#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div");

    // FUNCTION get tag
    const getTag = (tagSelector : Element) => {
      let result : string[] = []
      
      const tagList = $(tagSelector).find(".tags-wrapper > a");

      tagList.map((idx,el)=>{
        const tag = $(el).text();
        result[idx] = tag;
      });
    
      return result;
    }

    ARTICLE_SELECTOR.map((idx, el) => {
      content[idx] = {
        head: $(el).find("img").attr('src'),
        date: $(el).find(".subinfo > span:first-of-type").text(),
        context: $(el).find("p").text(),
        href: $(el).find("a:first-child").attr('href'),
        headline: $(el).find("h2").text(),
        tags: getTag(el),
      }
    });
    
    return content;
  }
  catch(e){
    console.log(e);
  }
}

const article = getHtml("https://velog.io/@kimbangul");

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse)  {
  res.status(200).json({
    data: await article,
    sample: 'hello'
  })
}