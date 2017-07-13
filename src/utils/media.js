// @flow
export const defaultBreakpoints = {
  sm: 500,
  md: 768,
  lg: 1100,
};

const query = (size, breakpoints = defaultBreakpoints) => (...args) => {
  const ret = {};
  const minWidth = breakpoints[size] || defaultBreakpoints[size];
  ret[`@media (min-width: ${minWidth}px)`] = args;
  return ret;
};

export default Object.keys(defaultBreakpoints).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = breakpoints => query(label, breakpoints);
  return accumulator;
}, {});
