'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _BreakpointProvider = require('./BreakpointProvider');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable no-unused-vars */


function HiddenContainer(props) {
  var children = props.children,
      debug = props.debug,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      breakpoints = props.breakpoints,
      rest = _objectWithoutProperties(props, ['children', 'debug', 'xs', 'sm', 'md', 'lg', 'breakpoints']);

  var newChildren = (0, _utils.passOn)(children, [_Row2.default, _Column2.default], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return _react2.default.createElement(
    'div',
    rest,
    newChildren
  );
}

HiddenContainer.propTypes = {
  children: require('prop-types').node,
  debug: require('prop-types').bool,
  xs: require('prop-types').bool,
  sm: require('prop-types').bool,
  md: require('prop-types').bool,
  lg: require('prop-types').bool,
  breakpoints: require('prop-types').object
};
var compute = function compute(name) {
  return (0, _utils.breakpoint)(name, function (props, name) {
    return {
      display: props[name] ? 'none' : 'inherit'
    };
  });
};

var Hidden = (0, _glamorous2.default)(HiddenContainer)(compute('xs'), compute('sm'), compute('md'), compute('lg'));

exports.default = (0, _BreakpointProvider.withBreakpoints)(Hidden);