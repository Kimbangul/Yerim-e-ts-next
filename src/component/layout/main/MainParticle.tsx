import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Engine, IOptions, ISourceOptions, RecursivePartial } from '@tsparticles/engine';
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
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: false,
        mode: 'grab',
        parallax: { enable: true, force: 150, smooth: 30 },
        // attract: { distance: 200, duration: 0.4, factor: 5 }
      },
      onClick: {
        enable: true,
        mode: 'emitter',
      },
      resize: { enable: true },
    },
    modes: {
      bubble: {
        distance: 500,
        duration: 0.3,
        opacity: 1,
        size: 2,
        speed: 3,
      },
      grab: { distance: 800, line_linked: { opacity: 0.8 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 30, duration: 0.4 },
    },
  },
  particles: {
    color: {
      value: ['#ffffff20', '#0ACDCE80', '#0ACDCE40'],
    },
    links: {
      color: '#ffffff',
      distance: 60,
      enable: true,
      opacity: 0.04,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: 'none',
      random: true,
      size: true,
      straight: false,
      outModes: 'out',
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
    number: { density: { enable: true }, value: 80 },
    opacity: {
      value: { min: 0.2, max: 0.64 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1.2, max: 1.8 },
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
