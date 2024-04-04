import { Button, MaxWidthContainer, Page } from '@/styles/Common';
import styled from 'styled-components';

const Work = {
  Page: styled(Page)`
    /* @media (${({ theme }) => theme.windowSize['lt-s']}) {
      padding-top: 7.2rem;
      padding-bottom: 7.2rem;
    } */
    /* FUNCTION mb */
    /* @media (${({ theme }) => theme.windowSize['mb-m']}) {
      height: 6rem;
    } */
    /* FUNCTION section animation */
    &.active {
      .Work__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    opacity: 0; //TODO
    transition: opacity 0.3s;
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      opacity: 1;
    }
  `,
  Text: {
    Container: styled.div`
      width: 100%;
      color: ${({ theme }) => theme.color.text_head};
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
      &:nth-of-type(1) {
        animation-delay: 0.3s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.6s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.9s;
      }
      &:nth-of-type(4) {
        animation-delay: 1.2s;
      }
    `,
  },
  Content: {
    Container: styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3.2rem;
      margin-top: 4.8rem;
      margin-bottom: 4.8rem;
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        grid-template-columns: 1fr 1fr;
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
  Container: styled.a`
    /* display: flex;
    align-items: flex-start; */
    overflow: hidden;
    /* gap: 5.6rem; */
    span {
      border-radius: 0.8rem;
      overflow: hidden;
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
  Thumb: styled.div`
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
    Title: styled.h4`
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      font-weight: 700;
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      word-break: keep-all;
      margin-top: 1.2rem;
      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.sm};
      }
      /* FUNCTION mb */
      /* @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.xs};
      } */
    `,
    Category: styled.div`
      font-size: ${({ theme }) => theme.fontSize.body.sm};
      color: ${({ theme }) => theme.color.text_2};
      margin-top: 0.4rem;
      transition: font-size 0.3s;

      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.xs};
      }
    `,
    TagList: styled.ul`
      display: flex;
      margin-top: 1.6rem;
      flex-wrap: wrap;
      gap: 0.4rem;

      .TagItem {
        padding: 0.2rem 0.8rem;
        font-size: ${({ theme }) => theme.fontSize.body.xs};
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
