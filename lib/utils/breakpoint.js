'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoint = function breakpoint(name, getStyle) {
  return function (props) {
    if (_media2.default[name]) {
      return _media2.default[name](props.breakpoints)(getStyle(props, name));
    } else {
      return getStyle(props, name);
    }
  };
};

exports.default = breakpoint;