import styled, { css } from 'styled-components';
import React from 'react';

import { blurDataUrl } from 'src/data/data';
import MainVideo from 'src/component/Main/MainVideo';
import MainParticle from 'src/component/Main/MainParticle';
import {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
} from 'styles/Common';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

import MOON from 'src/assets/image/main/moon.png';

// COMPONENT main component
const MainView: React.FC = () => {
  return (
    <Main.Page className='section'>
      <MainVideo />
      <MainParticle />
      <Main.Container className='Main__container'>
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <Main.Text.Container className='Main__text-container'>
          <Main.Text.Title className='Main__title'>YERIM.e</Main.Text.Title>
          <Main.Text.Desc className='Main__desc'>
            Web Developer Portfolio
          </Main.Text.Desc>
        </Main.Text.Container>
      </Main.Container>
      <Main.Image.Container>
        <Main.Image.Inner>
          <AutoHeightImageView
            src={MOON.src}
            alt='main image'
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </Main.Image.Inner>
      </Main.Image.Container>
      <Main.ScrollDown.Container className='Main__scroll-down-container'>
        <Main.ScrollDown.Icon></Main.ScrollDown.Icon>
        <Main.ScrollDown.Text>Scroll Down</Main.ScrollDown.Text>
      </Main.ScrollDown.Container>
    </Main.Page>
  );
};

// COMPONENT style
const Main = {
  Page: styled(Container)`
    background-size: 70%;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    background-attachment: fixed;
    background-position: 100% center;
    position: relative;
    overflow: hidden;
    #tsparticles {
      canvas {
        max-height: 100vh;
      }
    }
    .fp-overflow {
      overflow-y: visible !important;
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
      display: inline-block;
      padding-bottom: 8rem;
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 3.2rem;
    `,
    Title: styled.h3`
      color: ${({ theme }) => theme.color.f_headColor};
      font-size: 7rem;
      font-weight: 900;
      letter-spacing: 0.4rem;
      transition: font-size 0.3s;

      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.ul};
      }
      /* FUNCTION mb */
      @media (${(props) => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xl};
      }
      @media (${(props) => props.theme.windowSize['mb-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.lg};
      }
    `,
    Desc: styled.p`
      color: ${({ theme }) => theme.color.f_headColor};
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      margin-left: 1.4rem;
      letter-spacing: 0.8rem;
      transition: font-size 0.3s, letter-spaction 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
        letter-spacing: 0.4rem;
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.sm};
      }
    `,
  },
  Image: {
    Container: styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(calc(-50% - 2.4rem));
      span {
        @keyframes imgAnimation {
          0% {
            transform: rotate(0deg);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.2;
          }
        }
        animation: imgAnimation 180s infinite linear;
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
            top: 0.8rem;
            opacity: 0.4;
          }
          85% {
            top: 1.6rem;
          }
          100% {
            top: 1.6rem;
            opacity: 1;
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

export default MainView;
