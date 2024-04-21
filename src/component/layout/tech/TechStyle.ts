import styled from 'styled-components';
import { MaxWidthContainer, Page, SectionTitleAni } from '@/styles/Common';

export const Tech = {
  Page: styled(Page)`
    /* padding-top: 0; */
    background-color: ${props => props.theme.color.secondBg};
    transition: opacity 0.3s;
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/tech/tech_design.webp);
        background-repeat: no-repeat;
        filter: contrast(0.5) grayscale(1) brightness(0.55);
        background-position: center top;
        opacity: 0; // TODO;
        transition: opacity 0.3s;
        @media (${({ theme }) => theme.windowSize['mb-m']}) {
          opacity: 1;
        }
      }
    }

    .fp-overflow {
      width: 100%;
    }
    /* FUNCTION section animation */
    &.active {
      &::after {
        opacity: 1;
        transition: opacity 0.3s 0.3s;
      }
      .Tech__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    /* padding-top: 10.4rem; */
    /* padding-bottom: 7.2rem; */
    position: relative;
    z-index: 1;
    transition: margin 0.3s, opacity 0.3s;
    opacity: 0; // TODO;
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      padding-top: 24.5rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      /* padding-top: 34rem; */
      padding-top: 26rem;
      /* opacity: 1; */
    }
  `,
  Img: {
    Container: styled.div`
      width: 100%;
      /* margin-top: 3.2rem; */
      position: relative;
      filter: contrast(0.5) grayscale(1) brightness(0.55);
      border-radius: 0.4rem;
      overflow: hidden;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        display: none;
      }
    `,
  },
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.text_head};
      transform: translateY(-50%);
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
      ${SectionTitleAni(10)}
    `,
  },
  List: {
    Container: styled.ul`
      display: flex;
      flex-direction: column;
      gap: 8rem;
    `,
  },
};
// List
export const TechList = {
  Category: styled.li`
    flex-basis: 50%;
  `,
  Contents: {
    Container: styled.div`
      margin-top: 1.6rem;
    `,
    List: styled.ul`
      margin-top: 1.6rem;
      line-height: 1.7;
      word-break: keep-all;
      &:first-child {
        margin-top: 0;
      }
    `,
  },
  Title: styled.h4`
    width: 32rem;
    color: ${({ theme }) => theme.color.text_3};
    font-size: ${({ theme }) => theme.fontSize.head.sm};
    font-weight: 600;
    transition: font-size 0.3s;

    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.head.xs};
    }
  `,
  Item: styled.li`
    font-size: ${({ theme }) => theme.fontSize.body.md};
    line-height: 2;
    font-weight: 400;
    color: ${({ theme }) => theme.color.text_4};
    white-space: pre-line;
    transition: font-size 0.3s;
    margin-left: 2rem;
    list-style: square;
    margin-bottom: 1.2rem;
    &::marker {
      color: ${({ theme }) => theme.color.point80};
      font-size: 0.7em;
    }
    &:last-child {
      margin-bottom: 0;
    }
    /* FUNCTION mb */
    /* @media (${props => props.theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.sm};
    } */
    &:first-child {
      margin-top: 0;
    }
  `,
  Tag: {
    List: styled.ul`
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
    `,
  },
};

export default Tech;
