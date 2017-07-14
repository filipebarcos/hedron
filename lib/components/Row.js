'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Hidden = require('./Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable no-unused-vars */


function RowContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      divisions = props.divisions,
      theme = props.theme,
      alignContent = props.alignContent,
      alignItems = props.alignItems,
      alignSelf = props.alignSelf,
      justifyContent = props.justifyContent,
      order = props.order,
      rest = _objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'theme', 'alignContent', 'alignItems', 'alignSelf', 'justifyContent', 'order']);

  var newChildren = (0, _utils.passOn)(children, [_Column2.default, _Hidden2.default], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug,
      divisions: divisions
    };
  });
  return _react2.default.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.propTypes = {
  children: require('prop-types').node,
  className: require('prop-types').string,
  debug: require('prop-types').bool,
  tagName: require('prop-types').string,
  theme: require('prop-types').object,
  divisions: require('prop-types').number,
  alignContent: require('prop-types').string,
  alignItems: require('prop-types').string,
  alignSelf: require('prop-types').string,
  justifyContent: require('prop-types').string,
  order: require('prop-types').string
};
RowContainer.defaultProps = {
  divisions: 12
};

var Row = (0, _glamorous2.default)(RowContainer)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

exports.default = Row;