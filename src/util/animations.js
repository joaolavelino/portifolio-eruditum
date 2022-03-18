export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: 1000,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const submenuAnimation = {
  hidden: {
    height: "0px",
  },
  show: {
    height: "80px",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: {
    height: "0px",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

export const lineAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
      ease: "easeInOut",
    },
  },
};

export const mobileNavAnimation = {
  hidden: {
    y: -296,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    y: -296,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
