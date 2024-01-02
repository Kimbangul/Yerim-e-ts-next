import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getHtml = async (name : string, limit: number) => {
  console.log(name);
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
              username: name,
              limit: limit,
            }
      }
    });
    return html.data.data.posts;
  }
  catch(e){
    console.log(e);
  }
}


export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse)  {  
    console.log(typeof req.query.id);
    console.log(typeof req.query.count);
    console.log(typeof req.query.id !== 'string' || typeof req.query.count !== 'string');
  if (typeof req.query.id !== 'string' || typeof req.query.count !== 'string') {
    res.status(400).json(`parameter error`);
    return;
  }

  const article = getHtml(req.query.id, parseInt(req.query.count));
  console.log(await article);
  res.status(200).json(await article);
}