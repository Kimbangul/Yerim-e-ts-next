import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const particleOption: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  // backgroundMode: {
  //   enable: true,
  //   zIndex: 0,
  // },
  background: {
    color: 'transparent',
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      // onHover: {
      //   enable: true,
      //   mode: 'grab',
      //   parallax: { enable: true, force: 150, smooth: 30 },
      //   // attract: { distance: 200, duration: 0.4, factor: 5 }
      // },
      onHover: { enable: true, mode: 'trail', parallax: { enable: true, force: 70, smooth: 10 } },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: { enable: true },
    },
    modes: {
      connect: {
        enable: false,
      },
      bubble: {
        distance: 800,
        duration: 0.3,
        opacity: 1,
        size: 2,
        speed: 3,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      push: { default: true, quantity: 10 },
      remove: { particles_nb: 2 },
      repulse: { distance: 30, duration: 0.4 },
    },
  },
  particles: {
    color: {
      value: ['#ffffff20', '#0ACDCE80', '#0ACDCE40'],
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      angle: { offset: 0, value: 90 },
      speed: 0.7,
      direction: 'none',
      random: true,
      size: true,
      straight: false,
      outModes: 'out',
    },
    number: { density: { enable: true }, value: 80 },
    opacity: {
      value: { min: 0, max: 0.64 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    remove: { quantity: 2 },
    size: {
      value: { min: 0.8, max: 1.8 },
      animation: {
        enable: true,
        speed: 1,
        startValue: 'random',
        mode: 'random',
        sync: false,
      },
    },
  },
  detectRetina: true,
  zLayers: 100,
};

const MainParticle: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={particleOption} />;
  }

  return <></>;
};

export default MainParticle;
