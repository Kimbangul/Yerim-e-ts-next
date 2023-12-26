import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio, {Element} from 'cheerio';
import { ContentType } from './type';


const getHtml = async (url : string) => {
  console.log(url);
  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
   // console.log($);

    let content : ContentType[] = [];
    //const ARTICLE_SELECTOR = $("#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div");
    //const ARTICLE_SELECTOR = $(".FlatPostCardList_block__VoFQe > div");
    const ARTICLE_SELECTOR= $("div.FlatPostCard_block__a1qM7");
    console.log(ARTICLE_SELECTOR.length);

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
      //console.log(content[idx]);
      console.log($(el).find("img").attr('src'));
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
  console.log(article);
  res.status(200).json(await article)
}