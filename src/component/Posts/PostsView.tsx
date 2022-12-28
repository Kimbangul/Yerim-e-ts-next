import styled from 'styled-components';
import axios from 'axios';

import { useAPIcall } from 'utils/utils';
import { SectionCategoryTitle } from 'styles/Common';
import PostList, { PostListPropsType } from 'src/component/Posts/PostsList';

// COMPONENT main component
const PostsView = () => {
  // const productCall = useAPICall(axios.get, '/admin/product/detail', { params: { last_selection_id: router.query.id } }, 'product_data')

  const postsCall = useAPIcall(
    axios.get,
    'https://api.honeycombpizza.link/velog/kimbangul'
  );

  const posts = postsCall.data ? postsCall.data : [];
  console.log(posts);

  if (postsCall.state !== 'fullfilled') {
    return <postsCall.LoadingPage />;
  }
  return (
    <section className='section'>
      <SectionCategoryTitle>Posts</SectionCategoryTitle>
      <div className='PostsView__container'>
        {posts.length > 0 && <PostList {...posts} />}
      </div>
    </section>
  );
};

export default PostsView;
