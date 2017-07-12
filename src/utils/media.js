// @flow
import {css} from 'glamor';

export const defaultBreakpoints = {
  sm: 500,
  md: 768,
  lg: 1100,
};

const query = (size, breakpoints = defaultBreakpoints) => args => {
  const ret = {};
  ret[
    `@media (min-width: ${breakpoints[size] || defaultBreakpoints[size]}px)`
  ] = args;
  return css(ret);
};

export default Object.keys(defaultBreakpoints).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = breakpoints => query(label, breakpoints);
  return accumulator;
}, {});
