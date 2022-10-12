import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';

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
      onhover: {
        enable: true,
        mode: 'repulse',
        parallax: { enable: true, force: 50, smooth: 30 },
      },
      onclick: {
        enable: true,
        mode: 'push',
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
      grab: { distance: 200, line_linked: { opacity: 0.8 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 30, duration: 0.4 },
    },
  },
  particles: {
    // color: { value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'] },
    color: {
      value: '#fff',
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
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    number: { density: { enable: true, area: 1000 }, value: 80 },
    opacity: {
      random: true,
      value: 0.64,
      animation: {
        enable: true,
        opacity_min: 0.2,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 1.6,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        size_min: 1,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

const MainParticle: React.FC = () => {
  const particlesInit: (main: Engine) => Promise<void> = async (
    main: Engine
  ): Promise<void> => {
    await loadFull(main);
    return;
  };

  return <Particles options={particleOption} init={particlesInit} />;
};

export default MainParticle;
