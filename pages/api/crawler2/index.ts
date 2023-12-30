import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio, {Element} from 'cheerio';
import { ContentType } from '../crawler/type';
import axios from 'axios';


// const article = getHtml(process.env.NEXT_PUBLIC_BLOG_URL || '');
const getHtml = async (url : string) => {
  //console.log(url); 
  try {  
    const html = await axios({
      url: "https://v2.velog.io/graphql",
      method: "post",
      data: {
        query: `
            query Posts($cursor: ID, $username: String, $temp_only: Boolean, $limit: Int) {
                posts(cursor: $cursor, username: $username, temp_only: $temp_only, limit: $limit) {
                  id
                  title
                  short_description
                  thumbnail
                  user {
                    username
                    profile {
                      thumbnail
                    }
                  }
                  url_slug
                  released_at
                  updated_at
                  comments_count
                  tags
                  likes
                }
              }
            `,
        variables:{
              username: 'kimbangul',
              limit: 4,
            }
      }
    });
    //console.log(html.data.data.posts);
    return html.data.data.posts;
  }
  catch(e){
    console.log(e);
  }
}
const article =  getHtml(process.env.NEXT_PUBLIC_BLOG_URL || '');
console.log(article);

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse)  {  
    
  res.status(200).json(await article);
}