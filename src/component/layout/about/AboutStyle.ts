import styled from 'styled-components';
import { Page, Button, MaxWidthContainer } from '@/styles/Common';

const About = {
  Page: styled(Page)`
    .fp-overflow {
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        width: 100%;
      }
    }
    .About__profile-img {
      opacity: 0; // TODO
      transition: opacity 0.3s 0.3s;
    }
    /* FUNCTION section animation */
    &.active {
      .About__title {
        opacity: 1;
        transition: font-size 0.3s, margin 0.3s, opacity 0.3s 0.8s;
      }
      .About__desc {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 1.4s;
      }
      .About__button-wrap {
        opacity: 1;
        transition: opacity 0.3s 2s;
      }
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
    Container: styled.div`
      color: ${({ theme }) => theme.color.text_head};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    `,
    Title: {
      Text: styled.h3`
        font-size: ${({ theme }) => theme.fontSize.head.xl};
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.text_head};
        opacity: 0; //TODO
        transition: font-size 0.3s, margin 0.3s, opacity 0.3s;

        /* FUNCTION mb */
        @media (${({ theme }) => theme.windowSize['mb-l']}) {
          margin-top: 3.2rem;
          font-size: ${({ theme }) => theme.fontSize.head.md};
        }
      `,
      Light: styled.span`
        font-weight: 300;
      `,
    },
    Desc: {
      Text: styled.p`
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 1.8;
        font-weight: 400;
        color: ${({ theme }) => theme.color.text_4};
        margin-top: 2.4rem;
        word-break: keep-all;
        opacity: 0; //TODO
        transition: font-size 0.3s, opacity 0.3s;
        @media (${props => props.theme.windowSize['mb-m']}) {
          font-size: ${({ theme }) => theme.fontSize.body.rg};
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
      opacity: 0; //TODO
      transition: opacity 0.3s;

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
