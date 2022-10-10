import styled, { css } from 'styled-components';
import React from 'react';

import MainVideo from 'src/component/Main/MainVideo';
import MainParticle from 'src/component/Main/MainParticle';
import { Container, SectionCategoryTitle } from 'styles/Common';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

import MOON from 'src/assets/image/main/moon.png';
import { relative } from 'path';

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
          {/* <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '1000px' }}>
              <AutoHeightImageView src={MOON.src} alt='main image' />
            </div>
          </div> */}
        </Main.Text.Container>
      </Main.Container>
    </Main.Page>
  );
};

// COMPONENT style
const Main = {
  Page: styled(Container)`
    background: url(${MOON.src});
    background-size: 70%;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    background-attachment: fixed;
    background-position: 100% center;
  `,
  Container: styled.div`
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
  `,
  Text: {
    Container: styled.div`
      text-align: justify;
      text-align-last: justify;
      display: inline-block;
    `,
    Title: styled.h2`
      color: ${({ theme }) => theme.color.f_headColor};
      font-size: 7rem;
      font-style: italic;
      font-weight: 900;
      letter-spacing: 0.4rem;
    `,
    Desc: styled.p`
      color: ${({ theme }) => theme.color.f_headColor};
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      margin-top: 0.8rem;
      margin-left: 1.4rem;
      letter-spacing: 0.8rem;
    `,
  },
};

export default MainView;
