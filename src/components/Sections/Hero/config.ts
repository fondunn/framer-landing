export const config = {
  h1: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.5,
      },
    },
  },
  p: {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
      },
    },
  },
};
