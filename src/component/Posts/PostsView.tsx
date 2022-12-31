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

  const posts : PostListPropsType | []  = postsCall.data ? postsCall.data.slice(0,5) : [];

  if (postsCall.state !== 'fullfilled') {
    return <postsCall.LoadingPage />;
  }
  return (
    <section className='section'>
      <SectionCategoryTitle>Posts</SectionCategoryTitle>
      <Post.Title className='PostsView__title'>
      <Post.Word className='PostsView__title-word'>R</Post.Word>
      <Post.Word className='PostsView__title-word'>e</Post.Word>
      <Post.Word className='PostsView__title-word'>c</Post.Word>
      <Post.Word className='PostsView__title-word'>e</Post.Word>
      <Post.Word className='PostsView__title-word'>n</Post.Word>
      <Post.Word className='PostsView__title-word'>t</Post.Word>
            <Post.Word className='PostsView__title-word'>P</Post.Word>
            <Post.Word className='PostsView__title-word'>o</Post.Word>
            <Post.Word className='PostsView__title-word'>s</Post.Word>
            <Post.Word className='PostsView__title-word'>t</Post.Word>
            <Post.Word className='PostsView__title-word'>s</Post.Word>
          </Post.Title>
      <div className='PostsView__container'>
        {posts.length > 0 && posts.map((el : PostListPropsType,idx: number) => {
          return (
            <PostList key={`post${idx}`} {...el} />
          )
        })}
      </div>
    </section>
  );
};

// COMPONENT style
const Post = {
  Title: styled.h3`
  font-size: ${({ theme }) => theme.fontSize.head.xl};
  color: ${({ theme }) => theme.color.text_head};
  transition: font-size 0.3s;
  /* FUNCTION mb */
  @media (${({ theme }) => theme.windowSize['mb-l']}) {
    font-size: ${({ theme }) => theme.fontSize.head.md};
  }
`,
Word: styled.span`
  @keyframes titleWordAni {
    0% {
      top: 0;
    }
    20% {
      top: -0.4rem;
    }
    40% {
      top: 0;
    }
    60% {
      top: 0;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }
  position: relative;
  animation: titleWordAni 1.8s infinite;
  &:nth-of-type(1) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.6s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.9s;
  }
  &:nth-of-type(4) {
    animation-delay: 1.2s;
  }
`,
}

export default PostsView;
