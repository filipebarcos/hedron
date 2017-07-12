// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'glamorous';
import Column from './Column';
import Hidden from './Hidden';
import {divvy, passOn} from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  debug?: boolean,
  tagName?: string,
  theme?: Object,
  // grid props
  divisions?: number,
  // flex props
  alignContent?: string,
  alignItems?: string,
  alignSelf?: string,
  justifyContent?: string,
  order?: string,
};

function RowContainer(props: Props) {
  const {
    children,
    tagName,
    debug,
    divisions,
    theme,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    order,
    ...rest
  } = props;
  const newChildren = passOn(children, [Column, Hidden], child => {
    return {
      debug:
        typeof child.props.debug === 'undefined' ? debug : child.props.debug,
      divisions,
    };
  });
  return React.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.defaultProps = {
  divisions: 12,
};

const ifDefined = (prop, css = prop) => props =>
  props[prop] ? `${css}: ${props[prop]}` : '';

const Row = styled(RowContainer)(
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  props => {
    return {
      alignContent: props.alignContent ? props.alignContent : 'inherit',
      alignItems: props.alignItems ? props.alignItems : 'inherit',
      alignSelf: props.alignSelf ? props.alignSelf : 'inherit',
      justifyContent: props.justifyContent ? props.justifyContent : 'inherit',
      order: props.order ? props.order : 'inherit',
    };
  },
);

export default Row;
