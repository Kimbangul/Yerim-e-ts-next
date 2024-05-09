import { motion } from 'framer-motion';
import { Button, MaxWidthContainer, Page, SectionTitleAni } from '@/styles/Common';
import styled from 'styled-components';

const Work = {
  Page: styled(Page)`
    /* FUNCTION section animation */
    &.active {
      .Work__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    // opacity: 0; //TODO
    transition: opacity 0.3s;
  `,
  Text: {
    Container: styled.div`
      width: 100%;
      color: ${({ theme }) => theme.color.text_head};
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
      ${SectionTitleAni(4)}
    `,
  },
  Content: {
    Container: styled(motion.ul)`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3.2rem;
      margin-top: 4.8rem;
      margin-bottom: 4.8rem;
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        grid-template-columns: 1fr 1fr;
        gap: 3.2rem 2.4rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        grid-template-columns: 1fr 1fr;
        gap: 3.2rem 1.6rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        grid-template-columns: 1fr;
      }
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      justify-content: center;

      @media (max-width: ${({ theme }) => theme.windowSize['mb-l']}) {
        display: block;
      }
    `,
    Button: styled(Button)``,
  },
};

export const Item = {
  Container: styled(motion.li)`
    overflow: hidden;
    a {
      width: 100%;
      height: 100%;
    }
    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
    }

    &:hover {
      img {
        transform: scale(1.12);
      }
    }
  `,
  Thumb: styled(motion.div)`
    overflow: hidden;
    border-radius: 0.8rem;

    img {
      transition: transform 0.3s;
    }

    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      width: 100%;
    }
  `,
  Desc: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      align-self: stretch;
      justify-content: space-between;
    `,
    Info: styled.div``,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.body.lg};
      font-weight: 600;
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      word-break: keep-all;
      margin-top: 1.4rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.lg};
        margin-top: 1.2rem;
      }
    `,
    Category: styled.div`
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_2};
      margin-top: 0.4rem;
      transition: font-size 0.3s;

      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.sm};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
        margin-top: 0.2rem;
      }
    `,
    TagList: styled.ul`
      display: flex;
      margin-top: 1.8rem;
      flex-wrap: wrap;
      gap: 0.4rem;

      .TagItem {
        padding: 0.2rem 0.8rem;
        font-size: ${({ theme }) => theme.fontSize.body.sm};

        /* FUNCTION mb */
        @media (${({ theme }) => theme.windowSize['mb-m']}) {
          font-size: ${({ theme }) => theme.fontSize.body.xs};
        }
      }
    `,
    Desc: styled.p`
      margin-top: 2.4rem;
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_4};
      line-height: 1.8;
      word-break: keep-all;
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
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 2.4rem;
      gap: 1.6rem;
    `,
  },
};

export default Work;
