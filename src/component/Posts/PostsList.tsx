import styled from 'styled-components';

import Link from 'next/link';
import Tag from 'src/component/common/Tag';

// COMPONENT main component
const PostList: React.FC<PostListPropsType> = (props) => {
  const tagList = props.tags ? JSON.parse(props.tags.replace(/'/g, '"')) : [];

  return (
    <Post.Item className='Post'>
      <Link href={`https://velog.io${props.href}` || '#'}>
        <a target='_blank'>
          <Post.Title.Container className='Post__title-container'>
            <Post.Title.Text className='Post__title'>{props.headline}</Post.Title.Text>
            <Post.Title.Date className='Post__date'>{props.date}</Post.Title.Date>
          </Post.Title.Container>
          <Post.Context className='Post__context'>{props.context}</Post.Context>
          {tagList.length > 0 &&
          <Post.Tag className='Post__tag'>    
            {
              tagList.map ((el:string, idx: number) => {
                return <Tag key={`tag${idx}`}>{el}</Tag>;
              })
            }      
          </Post.Tag>
            }
        </a>
      </Link>
    </Post.Item>
  );
};

// COMPONENT styled component
const Post = {
  Item: styled.li`
 padding-top: 3.2rem;
 border-top: 0.1rem solid #444;
 margin-top: 3.2rem;
  &:first-child{
    margin-top: 0;
    border-top: none;
    padding-top: 0;
  }
  `,
  Title:{
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    Text: styled.h3`
    font-size: ${props => props.theme.fontSize.head.xs};
    font-weight: 500;
    color: ${props => props.theme.color.text_head};
    `,
    Date: styled.div`
     font-size: ${props => props.theme.fontSize.body.sm};
     color: ${props => props.theme.color.text_2};
    `
  },
  Context: styled.p`
    font-size: ${props => props.theme.fontSize.body.md};
    color: ${props => props.theme.color.text_2};
    margin-top: 1.6rem;
    padding-left: 0.4rem;
  `,
  Tag: styled.ul`
    display: flex;
    gap: 0.8rem;
    margin-top: 2.4rem;
    flex-wrap: wrap;
  `,
  }

// PARAM type
export type PostListPropsType = {
  headline?: string;
  date?: string;
  href?: string;
  tags?: string;
  context?: string;
};

export default PostList;
