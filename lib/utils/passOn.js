'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (children, ofTypes) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (r) {
    return r;
  };

  var response = _react2.default.Children.map(children,
  // Check to see if the child's component type is whitelisted,
  // and then process it.
  function (child) {
    return _react2.default.isValidElement(child) && ofTypes.includes(child.type) ? _react2.default.cloneElement(child, process(child)) : child;
  });
  return response;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }