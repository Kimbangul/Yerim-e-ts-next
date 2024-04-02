import { MaxWidthContainer, Page } from '@/styles/Common';
import styled from 'styled-components';

const Post = {
  Page: styled(Page)`
    background-color: ${props => props.theme.color.secondBg};
    height: auto;
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

    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      /* padding-top: 32rem; */
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      /* padding-top: 34rem; */
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
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      .map(
        (_, index) => `&:nth-of-type(${index}){
      animation-delay: calc(0.3s * ${index});
    }`
      )
      .join('')}
  `,
  List: styled.ul`
    margin-top: 4.8rem;
  `,
  Loading: styled.div`
    min-height: 100vh;
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

export default Post;
