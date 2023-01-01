import styled from 'styled-components';
import axios from 'axios';

import { SectionCategoryTitle } from 'styles/Common';
import PostList, { PostListPropsType } from 'src/component/Posts/PostsList';
import useApiCall from 'utils/useApiCall';

type VelogArticle={
  headline:string
  href:string
  date:string
  tags:string
  context:string
}

type PartialArticleType = Partial<VelogArticle>
// COMPONENT main component
const PostsView = () => {
  // const productCall = useAPICall(axios.get, '/admin/product/detail', { params: { last_selection_id: router.query.id } }, 'product_data')

  const postsCall = useApiCall<VelogArticle[]>(
   ()=> axios.get( 'https://api.honeycombpizza.link/velog/kimbangul')
   
  );

  if (postsCall.state !== 'accepted') {
    return <div >로딩 컴포넌트</div>;
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
        {postsCall.data.filter((_,index)=>index<5).map((el ,idx) => {
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
  ${
   [0,1,2,3,4,5,6,7,8,9,10,11].map((_,index)=>`&:nth-of-type(${index}){
      animation-delay: calc(0.3s * ${index});
    }`).join('')
  }
`,
}

export default PostsView;
