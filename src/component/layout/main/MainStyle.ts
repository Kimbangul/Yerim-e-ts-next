import styled from 'styled-components';
import { Page, MaxWidthContainer } from '@/styles/Common';
import { motion } from 'framer-motion';
import { LILITA_ONE, PRETENDARD } from '@/styles/Fonts';

const Main = {
  Page: styled(Page)`
    min-height: 100vh;
    min-height: 100svh;
    background-size: 70%;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    background-attachment: fixed;
    background-position: 100% center;
    position: relative;
    overflow: hidden;

    background: linear-gradient(0deg, rgba(34, 34, 34, 1) 20%, rgba(30, 78, 69, 0.4) 100%);

    #tsparticles {
      canvas {
        max-height: 100vh;
        position: absolute !important;
        top: 0;
        left: 0;
      }
    }
    .fp-overflow {
      overflow-y: visible !important;
    }
    /* FUNCTION section animation */
    &.active {
      .Main__scroll-down-container {
        opacity: 1;
        transition: opacity 0.3s 1s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    position: relative;
    z-index: 2;
    margin: 0 auto;
    transition: width 0.3s, padding 0.3s;
    text-align: center;
  `,
  Text: {
    Container: styled.div`
      padding-bottom: 5.6rem;
      transition: padding 0.3s;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `,
    Lottie: styled(motion.div)`
      width: 36rem;
      min-height: 36rem;
      margin: -1.2rem 0;
      margin-left: -1.2rem;
      transform: translateX(-0.8rem);
      cursor: grab;
      @media (${props => props.theme.windowSize['lt-s']}) {
        width: 32rem;
        min-height: 32rem;
        margin-left: 0;
      }
      /* FUNCTION mb */
      @media (${props => props.theme.windowSize['mb-m']}) {
        width: 26rem;
        min-height: 26rem;
        margin-left: 0;
      }
    `,
    Title: styled(motion.h2)`
      color: ${({ theme }) => theme.color.text_head};
      font-size: 6.4rem;
      font-weight: 900;
      letter-spacing: 0.4rem;
      transition: font-size 0.3s, letter-spacing 0.3s;
      letter-spacing: 0.2em;
      font-family: ${LILITA_ONE}, ${PRETENDARD}, sans-serif;

      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.ul};
        letter-spacing: 0.1em;
      }
      /* FUNCTION mb */
      @media (${props => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xl};
      }
      @media (${props => props.theme.windowSize['mb-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.lg};
      }
    `,
    Word: styled(motion.span)`
      display: inline-block;
      // transform-origin: bottom;
    `,
    Desc: styled.p`
      color: ${({ theme }) => theme.color.text_head};
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      margin-left: 1.4rem;
      letter-spacing: 0.8rem;
      transition: font-size 0.3s, letter-spacing 0.3s, top 0.3s;
      position: relative;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
        letter-spacing: 0.4rem;
        top: -0.4rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.sm};
      }
      @media (${({ theme }) => theme.windowSize['mb-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.xs};
      }
    `,
  },
  Image: {
    Container: styled(motion.div)`
      position: absolute;
      width: 170%;

      & > div {
        height: 100%;
      }

      @media (orientation: portrait) {
        width: 140vh;
      }
    `,
    Inner: styled.div`
      width: 100rem;
      position: relative;
      transition: width 0.3s;

      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        width: 70rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        width: 64rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-s']}) {
        width: 56rem;
      }
    `,
  },
  ScrollDown: {
    Container: styled.div`
      left: 50%;
      bottom: 3.2rem;
      transform: translateX(-50%);
      position: absolute;
      color: ${({ theme }) => theme.color.text};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
      opacity: 0; // TODO
      transition: opacity 0.3s;
    `,
    Icon: styled.div`
      width: 3.6rem;
      height: 4.8rem;
      border-radius: 10rem;
      border: 0.2rem solid ${({ theme }) => theme.color.text};
      position: relative;
      transition: width 0.3s, height 0.3s, border 0.3s;

      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        width: 3.2rem;
        height: 4.4rem;
        border: 0.1rem solid ${({ theme }) => theme.color.text};
      }
      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background: ${({ theme }) => theme.color.text};
        border-radius: 100%;
        top: 0.8rem;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.3s, height 0.3s;
        @keyframes cursorAni {
          0% {
            transform: translateX(-50%) translateY(0);
          }
          85% {
            transform: translateX(-50%) translateY(1.6rem);
          }
          100% {
            transform: translateX(-50%) translateY(1.6rem);
          }
        }
        animation: cursorAni 1.2s ease-in-out infinite;
        @media (${({ theme }) => theme.windowSize['mb-m']}) {
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    `,
    Text: styled.span`
      color: ${({ theme }) => theme.color.text_4};
      font-size: ${({ theme }) => theme.fontSize.body.xs};
    `,
  },
};

export const MainVideo = {
  Container: styled.video`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.34;
  `,
};

export default Main;
