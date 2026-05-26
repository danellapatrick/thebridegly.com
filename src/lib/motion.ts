export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 3px 0 rgb(26 22 37 / 0.05)" },
  hover: {
    y: -6,
    boxShadow:
      "0 20px 40px -12px rgb(84 189 149 / 0.22), 0 8px 16px -8px rgb(47 125 98 / 0.12)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};
