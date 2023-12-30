import styled from 'styled-components';

import Link from 'next/link';
import Tag from 'src/component/common/Tag';
import { PostListPropsType } from 'src/component/Posts/type';
import moment from 'moment';
import 'moment/locale/ko';

// COMPONENT main component
const PostList: React.FC<PostListPropsType> = (props) => {
  const tagList = props.tags || [];

  // FUNCTION 날짜 표기법 분기
  const getPostDate = () => {
    const diff = moment().diff(moment(props.released_at), 'days');
    if (diff > 6) return moment(props.released_at).format('YYYY.MM.DD');
    return moment(props.released_at).fromNow();
  }

  return (
    <Post.Item className='Post'>
      <Link href={`${'https://velog.io/@kimbangul/'+props.url_slug}` || '#'}>
        <a target='_blank'>
          <Post.Title.Container className='Post__title-container'>
            <Post.Title.Text className='Post__title'>
              {props.title}
            </Post.Title.Text>
            <Post.Title.Date className='Post__date'>
              {getPostDate()}
            </Post.Title.Date>
          </Post.Title.Container>
          <Post.Context className='Post__context'>{props.short_description}</Post.Context>
          {tagList.length > 0 && (
            <Post.Tag className='Post__tag'>
              {tagList.map((el: string, idx: number) => {
                return <Tag key={`tag${idx}`}>{el}</Tag>;
              })}
            </Post.Tag>
          )}
          <Post.Title.Date className='Post__date'>{getPostDate()}</Post.Title.Date>
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
    &:first-child {
      margin-top: 0;
      border-top: none;
      padding-top: 0;
    }
    &:hover {
      .Post__title {
        color: ${(props) => props.theme.color.point};
      }
    }
  `,
  Title: {
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1000px) {
        display: block;
      }
      .Post__date {
        display: block;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    `,
    Text: styled.h3`
      font-size: ${(props) => props.theme.fontSize.head.xs};
      font-weight: 500;
      color: ${(props) => props.theme.color.text_head};
      transition: color 0.3s, font-size 0.3s;
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${(props) => props.theme.fontSize.body.lg};
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${(props) => props.theme.fontSize.body.md};
      }
    `,
    Date: styled.div`
      font-size: ${(props) => props.theme.fontSize.body.sm};
      color: ${(props) => props.theme.color.text_2};
      display: none;
      @media (max-width: 1000px) {
        display: block;
        margin-top: 1.2rem;
        text-align: right;
      }
    `,
  },
  Context: styled.p`
    font-size: ${(props) => props.theme.fontSize.body.md};
    color: ${(props) => props.theme.color.text_2};
    margin-top: 1.6rem;
    line-height: 1.6;
    transition: font-size 0.3s;

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${(props) => props.theme.fontSize.body.rg};
    }
  `,
  Tag: styled.ul`
    display: flex;
    gap: 0.8rem;
    margin-top: 2.4rem;
    flex-wrap: wrap;
  `,
};

export default PostList;
