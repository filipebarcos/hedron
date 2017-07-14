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

var _Hidden = require('./Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable no-unused-vars */


function PageContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      fluid = props.fluid,
      rest = _objectWithoutProperties(props, ['children', 'tagName', 'debug', 'fluid']);

  var newChildren = (0, _utils.passOn)(children, [_Row2.default, _Hidden2.default], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return _react2.default.createElement(tagName || 'div', rest, newChildren);
}

PageContainer.propTypes = {
  children: require('prop-types').node,
  className: require('prop-types').string,
  tagName: require('prop-types').string,
  debug: require('prop-types').bool,
  fluid: require('prop-types').bool,
  width: require('prop-types').string
};
var Page = (0, _glamorous2.default)(PageContainer)({}, function (_ref) {
  var fluid = _ref.fluid,
      width = _ref.width;

  if (fluid) return { width: '100%' };

  return {
    margin: '0 auto',
    maxWidth: '100%',
    width: width ? width : '960px'
  };
});

exports.default = Page;