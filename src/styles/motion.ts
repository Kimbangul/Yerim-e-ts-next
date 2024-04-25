export const animateSpringItem = {
  hidden: { scale: 0.9, opacity: 0, y: 10 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
};

export const animateSpringList = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

export const animateSpringButton = {
  initial: { scale: 1 },
  hover: {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 800, damping: 10 },
  },
};

export const animateProfileImg = {
  initial: { opacity: 0, transform: `translateY(4rem)`, transition: { delay: 0 } },
  active: { opacity: 1, transform: `translateY(0rem)` },
};

export const animateSpringUpContainer = (stagger: number = 0.03) => {
  return {
    initial: { opacity: 0 },
    active: {
      opacity: 1,
      transition: {
        type: 'linear',
        when: 'beforeChildren',
        delayChildren: 0,
        staggerChildren: stagger,
      },
    },
  };
};

export const animateSpringUpText = {
  initial: { opacity: 0, rotate: 20, y: '2rem', origin: 'right bottom' },
  active: { opacity: 1, rotate: 0, y: '0rem' },
  // transition: {
  //   opacity: { type: 'linear' },
  //   type: 'spring',
  //   stiffness: 800,
  //   damping: 10,
  // },
};

export const animateSpringUpTextTransition = {
  opacity: { type: 'linear' },
  type: 'spring',
  stiffness: 800,
  damping: 25,
};

export const animateEaseUpText = {
  initial: { opacity: 0, y: '1.6rem' },
  active: { opacity: 1, y: '0rem' },
};
export const animateEaseUpTextTransition = {
  type: 'linear',
  duration: 0.35,
};
