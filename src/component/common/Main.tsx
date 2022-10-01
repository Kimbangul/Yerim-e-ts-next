import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import styled, { css } from 'styled-components';
import React from 'react';

const particleOption: RecursivePartial<IOptions> = {
  backgroundMode: {
    enable: true,
    zIndex: 0,
  },
  background: {
    color: 'transparent',
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: { enable: true, force: 7, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 500,
        duration: 0.3,
        opacity: 1,
        size: 2,
        speed: 3,
      },
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'] },
    links: {
      color: '#ffffff',
      distance: 500,
      enable: false,
      opacity: 0.4,
      width: 2,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      enable: true,
      outMode: 'bounce',
      random: false,
      size: true,
      speed: 1,
      straight: false,
      gravity: {
        enable: true,
        maxSpeed: 1.2,
      },
    },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: {
      random: true,
      value: 0.8,
    },
    shape: {
      type: 'star',
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
};

// COMPONENT style component
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.bgColor};
`;

// COMPONENT main
const Main: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <Container>
      <Particles options={particleOption} init={particlesInit} />
    </Container>
  );
};

export default Main;
