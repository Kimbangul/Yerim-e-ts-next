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
