import styled from 'styled-components';
import { MaxWidthContainer, Page, SectionTitleAni } from '@/styles/Common';
import { motion } from 'framer-motion';

export const Tech = {
  Page: styled(Page)`
    background-color: ${props => props.theme.color.secondBg};
    transition: opacity 0.3s;
    display: block;

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
    position: relative;
    z-index: 1;
    transition: margin 0.3s, opacity 0.3s;
  `,
  Img: {
    Container: styled(motion.div)`
      width: 100%;
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
      margin-top: 2.4rem;
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      margin-top: 8rem;
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
    List: styled(motion.ul)`
      margin-top: 1.6rem;
      line-height: 1.7;
      word-break: keep-all;
      &:first-child {
        margin-top: 0;
      }
    `,
  },
  Title: styled(motion.h4)`
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
  Item: styled(motion.li)`
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
    @media (${props => props.theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.rg};
    }
    &:first-child {
      margin-top: 0;
    }
    span {
      color: ${({ theme }) => theme.color.point};
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
