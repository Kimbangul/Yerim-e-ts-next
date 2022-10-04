import type { NextPage } from 'next';
import styled, { css } from 'styled-components';

import Header from 'src/component/common/Header';
import FullpageWrapper from 'src/component/common/FullpageWrapper';
import Particle from 'src/component/common/Particle';

const ParticleContainer = styled.div`
  width: 100%;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  .ParticleContainer__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FullpageWrapper />
      <ParticleContainer>
        <div className='ParticleContainer__inner'>{/* <Particle /> */}</div>
      </ParticleContainer>
    </>
  );
};

export default Home;
