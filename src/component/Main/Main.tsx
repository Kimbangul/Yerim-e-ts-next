import styled, { css } from 'styled-components';
import React from 'react';

import MainVideo from 'src/component/Main/MainVideo';
import MainParticle from 'src/component/Main/MainParticle';
import { Container, SectionCategoryTitle } from 'styles/Common';

const MainContainer = styled(Container)`
  .Main {
    &__video {
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
      opacity: 0.3;
    }
    &__container {
      width: ${({ theme }) => theme.maxWidth};
      position: relative;
      z-index: 2;
      margin: 0 auto;
      transition: width 0.3s, padding 0.3s;

      @media (${({ theme }) => theme.windowSize['lt-m']}) {
        width: calc(100vw - 6.4rem);
        padding: 0 40px;
        overflow: hidden;
      }
    }
    &__text-container {
      text-align: justify;
      text-align-last: justify;
      display: inline-block;
    }
    &__title {
      color: #fff;
      font-size: 7rem;
      font-style: italic;
      font-weight: 900;
      letter-spacing: 0.4rem;
    }
    &__desc {
      color: #fff;
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      margin-top: 0.8rem;
      margin-left: 1.4rem;
      letter-spacing: 0.8rem;
    }
  }
`;

// COMPONENT main
const Main: React.FC = () => {
  return (
    <MainContainer className='section'>
      <MainVideo />
      <MainParticle />
      <div className='Main__container'>
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <div className='Main__text-container'>
          <h2 className='Main__title'>YERIM.e</h2>
          <p className='Main__desc'>Web Developer Portfolio</p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
