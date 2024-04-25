import styled from 'styled-components';
import { Page, Button, MaxWidthContainer } from '@/styles/Common';
import { motion } from 'framer-motion';

const About = {
  Page: styled(Page)`
    .fp-overflow {
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        width: 100%;
      }
    }
    /* FUNCTION section animation */
    &.active {
      /* .About__button-wrap {
        opacity: 1;
        transition: opacity 0.3s 2s;
      } */
    }
  `,
  Container: styled(MaxWidthContainer)`
    display: flex;
    gap: 5.6rem;
    /* FUNCTION pc */
    @media (${({ theme }) => theme.windowSize['lt-m']}) {
      align-items: center;
    }
    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
      align-items: flex-start;
    }
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      gap: 0;
    }
  `,
  Text: {
    Container: styled(motion.div)`
      color: ${({ theme }) => theme.color.text_head};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    `,
    Title: {
      Text: styled(motion.h3)`
        font-size: ${({ theme }) => theme.fontSize.head.xl};
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.text_head};
        transition: font-size 0.3s, margin 0.3s, opacity 0.3s;

        /* FUNCTION mb */
        @media (${({ theme }) => theme.windowSize['mb-l']}) {
          margin-top: 3.2rem;
          font-size: ${({ theme }) => theme.fontSize.head.md};
        }

        & .About__title--light {
          font-weight: 300;
        }
      `,
    },
    Desc: {
      Text: styled(motion.p)`
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 1.8;
        font-weight: 400;
        color: ${({ theme }) => theme.color.text_4};
        word-break: keep-all;
        transition: font-size 0.3s, opacity 0.3s;
        @media (${props => props.theme.windowSize['mb-m']}) {
          font-size: ${({ theme }) => theme.fontSize.body.rg};
        }

        &:first-of-type {
          margin-top: 2.4rem;
        }
      `,
      Point: styled.span`
        color: ${({ theme }) => theme.color.point};
        font-weight: 500;
      `,
    },
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
      gap: 1.6rem;

      @media (${props => props.theme.windowSize['lt-s']}) {
        flex-direction: column;
      }
    `,
    Button: styled(Button)`
      @media (${props => props.theme.windowSize['lt-s']}) {
        margin-right: 0;
      }
    `,
  },
  LineBreak: {
    Pc: styled.br`
      /* FUNCTION tablet size */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        display: none;
      }
    `,
    Mb: styled.br`
      display: none;
      /* FUNCTION tablet size */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        display: block;
      }
    `,
  },
};

export default About;
