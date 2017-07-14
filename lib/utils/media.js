"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultBreakpoints = exports.defaultBreakpoints = {
  sm: 500,
  md: 768,
  lg: 1100
};

var query = function query(size) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBreakpoints;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var ret = {};
    var minWidth = breakpoints[size] || defaultBreakpoints[size];
    ret["@media (min-width: " + minWidth + "px)"] = args;
    return ret;
  };
};

exports.default = Object.keys(defaultBreakpoints).reduce(function (acc, label) {
  var accumulator = acc;
  accumulator[label] = function (breakpoints) {
    return query(label, breakpoints);
  };
  return accumulator;
}, {});