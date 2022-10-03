import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import styled, { css } from 'styled-components';

import Main from 'src/component/Main/Main';

// COMPONENT style component
const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding};
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

const FullpageWrapper: React.FC = () => {
  return (
    <ReactFullpage
      // PARAM fullpage options
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      responsiveWidth={1000}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Main />
            <Container className='section' style={{ background: '#2A3950' }}>
              <p>안녕하세요</p>
            </Container>
            <Container className='section' style={{ background: '#2A3950' }}>
              <p>반갑습니다.</p>
            </Container>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullpageWrapper;
