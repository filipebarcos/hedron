"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var divisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return 100 / divisions * span;
};