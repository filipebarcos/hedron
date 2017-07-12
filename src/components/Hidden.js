// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import glamorous from 'glamorous';
import Row from './Row';
import Column from './Column';
import {withBreakpoints} from './BreakpointProvider';
import {divvy, breakpoint, passOn} from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  debug?: boolean,
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  breakpoints?: Object,
};

function HiddenContainer(props: Props) {
  const {children, debug, xs, sm, md, lg, breakpoints, ...rest} = props;
  const newChildren = passOn(children, [Row, Column], child => {
    return {
      debug:
        typeof child.props.debug === 'undefined' ? debug : child.props.debug,
    };
  });
  return (
    <div {...rest}>
      {newChildren}
    </div>
  );
}

const compute = name =>
  breakpoint(name, (props, name) => {
    return {
      display: props[name] ? 'none' : 'inherit',
    };
  });

const Hidden = glamorous(HiddenContainer)(
  compute('xs'),
  compute('sm'),
  compute('md'),
  compute('lg'),
);

export default withBreakpoints(Hidden);
