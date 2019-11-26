const breakpoints = {
  regular: 736,
  large: 1280,
  reallylarge: 1690
};

export default Object.entries(breakpoints).reduce(
  (obj, [name, size]) => ({
    ...obj,
    [name]: `@media (min-width: ${size}px)`
  }),
  {}
);
