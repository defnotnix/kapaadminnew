export const variantContainer = {
  initial: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
      filter: "blur(16px)",
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      filter: "blur(0px)",
    },
  },
};
