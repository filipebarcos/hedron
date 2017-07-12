// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import glamorous from 'glamorous';
import Row from './Row';
import {withBreakpoints} from './BreakpointProvider';
import {divvy, breakpoint, passOn} from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  tagName?: string,
  theme?: Object,
  debug?: boolean,
  divisions?: number,
  fluid?: boolean,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xsShift?: number,
  smShift?: number,
  mdShift?: number,
  lgShift?: number,
  breakpoints?: Object,
};

function ColumnContainer(props: Props) {
  const {
    children,
    tagName,
    debug,
    divisions,
    fluid,
    xs,
    sm,
    md,
    lg,
    theme,
    xsShift,
    smShift,
    mdShift,
    lgShift,
    breakpoints,
    ...rest
  } = props;
  const newChildren = passOn(children, [Row], child => {
    return {
      debug:
        typeof child.props.debug === 'undefined' ? debug : child.props.debug,
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.defaultProps = {
  divisions: 12,
};

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size, shift) => {
      return {
        width: size ? `${divvy(divisions, size)}%` : 'inherit',
        marginLeft: shift ? `${divvy(divisions, shift)}%` : 'inherit',
      };
    })(props.divisions, props[name], props[`${name}Shift`]),
  );

const Column = glamorous(ColumnContainer)(
  {
    display: 'block',
    ...compute('xs'),
    ...compute('sm'),
    ...compute('md'),
    ...compute('lg'),
  },
  props => {
    return {
      boxSizing: 'border-box',
      padding: props.fluid ? '0' : '20px',
      width: '100%',
      backgroundColor: props.debug ? 'rgba(50, 50, 255, .1)' : 'inherit',
      outline: props.debug ? '1px solid #fff' : 'inherit',
    };
  },
);

export default withBreakpoints(Column);
