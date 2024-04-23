import styled from 'styled-components';
import { Page, Button } from '@/styles/Common';
import { motion } from 'framer-motion';

const Detail = {
  Container: styled(Page)`
    margin: 0 auto;
    /* padding-bottom: 7.2rem; */
    height: auto;
    .Detail__InfoList-item {
      margin-top: 0.8rem;
      display: flex;
    }
  `,

  Inner: styled.div`
    width: 80rem;
    opacity: 0;
    @keyframes fadeInAni {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    transition: width 0.3s, padding 0.3s;
    animation: fadeInAni 0.3s 0.3s ease-in-out both;
    @media (max-width: 800px) {
      width: 100%;
      padding: 0 6rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding: 0 3rem;
    }
  `,
  BackBtn: styled(motion.a)`
    display: inline-flex;
    align-items: center;
    gap: 0 0.8rem;
    font-size: ${({ theme }) => theme.fontSize.body.md};
    color: ${({ theme }) => theme.color.text_5};
    align-self: flex-start;
    margin-bottom: 2.4rem;
    .Detail__back {
      transform: translateX(0);
      transition: transform 0.3s;
    }
    svg {
      width: 1.4rem;
    }
    &:hover {
      .Detail__back {
        transform: translateX(-0.6rem);
      }
    }
  `,

  Title: {
    Wrap: styled.div`
      display: flex;
      gap: 0 1.2rem;
    `,
    Text: styled.h2`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      font-weight: 700;
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      word-break: keep-all;
      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.md};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.rg};
      }
    `,
    Container: styled.div`
      gap: 5.6rem;
    `,
    TextContainer: styled.div`
      padding-top: 3.2rem;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      text-align: left;
    `,
  },
  Category: styled.div`
    font-size: ${({ theme }) => theme.fontSize.body.lg};
    color: ${({ theme }) => theme.color.text_2};
    font-weight: 400;
    margin-top: 0.8rem;
    transition: font-size 0.3s;

    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.md};
    }
  `,
  Desc: {
    Container: styled.div`
      margin-top: 7.2rem;
    `,
    Content: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_4};
      line-height: 2;
      word-break: keep-all;
      display: flex;
      white-space: pre-line;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 2;
      }
      /* FUNCTION mb */
      @media (${props => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
    `,
    Title: styled.h3`
      color: ${({ theme }) => theme.color.text_3};
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      font-weight: 600;
      transition: font-size 0.3s;
      margin-bottom: 1.6rem;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xs};
      }
    `,
    Label: styled.span`
      flex-shrink: 0;
      font-weight: 600;
      width: 8rem;
      display: inline-block;
      color: ${({ theme }) => theme.color.point};
    `,
    InfoList: styled.ul`
      margin-top: 0;
    `,
  },
  Tag: {
    List: styled.ul`
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
      justify-content: flex-start;
    `,
  },
  Image: {
    Container: styled(motion.div)`
      position: relative;
      width: 100%;
      border-radius: 0.8rem;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 7.2rem;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      justify-content: center;
      margin-top: 5.6rem;
      gap: 1.6rem;
      flex-grow: 1;
      align-items: self-end;
    `,
    Button: styled(Button)`
      //  transition: all 0.3s, width 0.3s;
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        width: auto;
      }
    `,
  },
};

export default Detail;
