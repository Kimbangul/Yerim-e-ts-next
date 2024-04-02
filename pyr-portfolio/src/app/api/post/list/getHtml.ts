const setBodyData = (name: string, limit: number) => {
  const data = {
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
    variables: {
      username: name,
      limit: limit,
    },
  };
  return JSON.stringify(data);
};

const getHtml = async (name: string, limit: number) => {
  console.log(name);
  try {
    const res = await fetch('https://v2.velog.io/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      cache: 'no-cache',
      referrerPolicy: 'no-referrer',
      body: setBodyData(name, limit),
    });

    const html = await res.json();
    return html;
  } catch (e) {
    console.log(e);

    // if (response){
    //   throw {status: response.status, data: response.data};
    // }
    throw e;
  }
};

export default getHtml;
