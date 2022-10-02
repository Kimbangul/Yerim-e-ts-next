import styled, { css } from 'styled-components';
import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import MainVideo from 'src/component/Main/MainVideo';
import MainParticle from 'src/component/Main/MainParticle';
import theme from 'styles/Theme';

// COMPONENT style component
const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 3.2rem;
  padding-top: 7.2rem;
  overflow: hidden;
  background: ${({ theme }) => theme.color.bgColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

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
      /* display: flex;
      align-items: center;
      justify-content: center; */
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
      /* font-size: ${({ theme }) => theme.fontSize.head.xl}; */
      font-weight: 900;
      letter-spacing: 0.4rem;
    }
    &__desc {
      color: #fff;
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      margin-top: 0.8rem;
      letter-spacing: 0.8rem;
    }
  }
`;

// COMPONENT main
const Main: React.FC = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      responsiveWidth={1000}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Container className='section'>
              <MainVideo />
              <MainParticle />
              <div className='Main__container'>
                <div className='Main__text-container'>
                  <h2 className='Main__title'>YERIM.e</h2>
                  <p className='Main__desc'>Web Developer Portfolio</p>
                </div>
              </div>
            </Container>
            <Container
              className='section'
              style={{ background: '#2A3950' }}
            ></Container>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Main;
