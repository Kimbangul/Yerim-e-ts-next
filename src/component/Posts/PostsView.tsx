import styled from 'styled-components';
import axios from 'axios';

import { Container, SectionCategoryTitle, MaxWidthContainer } from 'styles/Common';
import PostList from 'src/component/Posts/PostsList';
import useApiCall from 'utils/useApiCall';

type VelogArticle={
  headline:string
  href:string
  date:string
  tags:string
  context:string
}

// COMPONENT main component
const PostsView = () => {

  const postsCall = useApiCall<VelogArticle[]>(
   ()=> axios.get( 'https://api.honeycombpizza.link/velog/kimbangul')   
  );

  if (postsCall.state !== 'accepted') {
    return <div >로딩 컴포넌트</div>;
  }
  return (
    <Post.Page className='section'>
      <SectionCategoryTitle>Posts</SectionCategoryTitle>
      <Post.Container className='PostsView__container'>
      <Post.Title className='PostsView__title'>
        <Post.Word className='PostsView__title-word'>R</Post.Word>
        <Post.Word className='PostsView__title-word'>e</Post.Word>
        <Post.Word className='PostsView__title-word'>c</Post.Word>
        <Post.Word className='PostsView__title-word'>e</Post.Word>
        <Post.Word className='PostsView__title-word'>n</Post.Word>
        <Post.Word className='PostsView__title-word'>t</Post.Word>
        <Post.Word className='PostsView__title-word'> </Post.Word>
        <Post.Word className='PostsView__title-word'>P</Post.Word>
        <Post.Word className='PostsView__title-word'>o</Post.Word>
        <Post.Word className='PostsView__title-word'>s</Post.Word>
        <Post.Word className='PostsView__title-word'>t</Post.Word>
        <Post.Word className='PostsView__title-word'>s</Post.Word>
      </Post.Title>
        {
          postsCall.data.length > 0 &&
          <Post.List className='PostsView__list'>
          {postsCall.data.filter((_,index)=>index<3).map((el ,idx) => {
            return (
              <PostList key={`post${idx}`} {...el} />
            )
          })}
          </Post.List>
        }    
      </Post.Container>
    </Post.Page>
  );
};



// COMPONENT style
const Post = {
  Page: styled(Container)`
  background-color: ${(props) => props.theme.color.secondBg};
  .fp-overflow {
    /* FUNCTION pc*/
    @media (${({ theme }) => theme.windowSize['lt-l']}) {
      width: 100%;
    }
  }
  /* FUNCTION section animation */
  &.active {
    .PostsView__container {
      opacity: 1;
      transition: opacity 0.3s 0.5s;
    }
  }
`,
Container: styled(MaxWidthContainer)`
opacity: 0;
transition: opacity 0.3s;
padding-bottom: 2.4rem;
@media (max-width: 1000px) {
  display: flex;
  flex-direction: column-reverse;
}
@media (${({ theme }) => theme.windowSize['mb-l']}) {
      padding-top: 32rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding-top: 34rem;
      opacity: 1;
    }
`,
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
   [0,1,2,3,4,5,6,7,8,9,10,11,12].map((_,index)=>`&:nth-of-type(${index}){
      animation-delay: calc(0.3s * ${index});
    }`).join('')
  }
`,
List: styled.ul`
  margin-top: 4.8rem;
`,
}

export default PostsView;
