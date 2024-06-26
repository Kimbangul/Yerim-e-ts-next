import Tag from '@/component/common/tag/Tag';
import { MaxWidthContainer, Page, Shimmer, SectionTitleAni } from '@/styles/Common';
import styled from 'styled-components';

const Post = {
  Page: styled(Page)`
    background-color: ${props => props.theme.color.secondBg};
    height: auto;
    min-height: unset;
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
    opacity: 0; // TODO
    transition: opacity 0.3s;
    padding-bottom: 2.4rem;

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      /* padding-top: 32rem; */
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      /* padding-top: 34rem; */
      opacity: 1;
    }
  `,
  Title: styled.h2`
    font-size: ${({ theme }) => theme.fontSize.head.xl};
    color: ${({ theme }) => theme.color.text_head};
    transition: font-size 0.3s;
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${({ theme }) => theme.fontSize.head.md};
    }
  `,
  Word: styled.span`
    ${SectionTitleAni(13)}
  `,
  List: styled.ul`
    margin-top: 4.8rem;
  `,
  Loading: styled.div`
    min-height: 100dvh;
  `,
};

export const PostItem = {
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
        color: ${props => props.theme.color.point};
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
      font-size: ${props => props.theme.fontSize.head.xs};
      font-weight: 500;
      color: ${props => props.theme.color.text_head};
      transition: color 0.3s, font-size 0.3s;
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${props => props.theme.fontSize.body.lg};
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${props => props.theme.fontSize.body.md};
      }
    `,
    Date: styled.div`
      font-size: ${props => props.theme.fontSize.body.sm};
      color: ${props => props.theme.color.text_2};
      display: none;
      @media (max-width: 1000px) {
        display: block;
        margin-top: 1.2rem;
        text-align: right;
      }
    `,
  },
  Context: styled.p`
    font-size: ${props => props.theme.fontSize.body.md};
    color: ${props => props.theme.color.text_2};
    margin-top: 1.6rem;
    line-height: 1.6;
    transition: font-size 0.3s;

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${props => props.theme.fontSize.body.rg};
    }
  `,
  Tag: styled.ul`
    display: flex;
    gap: 0.8rem;
    margin-top: 2.4rem;
    flex-wrap: wrap;
  `,
};

export const PostSkeleton = {
  Item: PostItem.Item,
  Title: PostItem.Title.Container,
  Text: styled.div`
    width: 40%;
    height: 3.5rem;
    background: ${({ theme }) => theme.color.skeletonBg};
    border-radius: 5rem;
    ${Shimmer('3.2s')}

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      width: 80%;
      font-size: ${props => props.theme.fontSize.body.lg};
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      width: 90%;
      font-size: ${props => props.theme.fontSize.body.md};
    }
  `,
  Date: styled(PostItem.Title.Date)`
    width: 8.2rem;
    height: 2rem;
    background: ${({ theme }) => theme.color.skeletonBg};
    border-radius: 5rem;
    ${Shimmer('3s')}

    @media (max-width: 1000px) {
      margin-left: auto;
      margin-right: 0;
    }
  `,
  Context: styled(PostItem.Context)`
    width: 60%;
    height: 2.8rem;
    background: ${({ theme }) => theme.color.skeletonBg};
    border-radius: 5rem;
    ${Shimmer('2s')}

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${props => props.theme.fontSize.body.rg};
    }
  `,
  TagItem: styled.li<{ children?: React.FC }>`
    min-width: 12rem;
    height: 3.2rem;
    border: none;
    border-radius: 8rem;
    background: ${({ theme }) => theme.color.skeletonBg};
    border-radius: 5rem;
    ${Shimmer('2.5s')}

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      min-width: 8rem;
      height: 2.4rem;
    }
    &:nth-child(2n) {
      min-width: 6rem;

      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        min-width: 4rem;
      }
    }
  `,
};

export default Post;
