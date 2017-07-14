'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _.Page,
    null,
    _react2.default.createElement(
      _.Row,
      null,
      _react2.default.createElement(
        _.Column,
        { sm: 8, smShift: 2, lg: 6, lgShift: 3 },
        _react2.default.createElement(
          'h1',
          null,
          'This is a column that is centered using the shift props'
        )
      )
    ),
    _react2.default.createElement(
      _.Row,
      null,
      _react2.default.createElement(
        _.Column,
        { fluid: true, sm: 4 },
        _react2.default.createElement(
          'h1',
          null,
          'Fluid Columns'
        )
      ),
      _react2.default.createElement(
        _.Column,
        { fluid: true, sm: 4 },
        _react2.default.createElement(
          'p',
          null,
          'A 12 column layout by default.'
        )
      ),
      _react2.default.createElement(
        _.Column,
        { fluid: true, sm: 4 },
        _react2.default.createElement(
          _.Row,
          { divisions: 24 },
          _react2.default.createElement(
            _.Column,
            { sm: 24 },
            _react2.default.createElement(
              'p',
              null,
              'But you can change the amount of columns by adding the `divisions` property to a Row.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'It is fully embeddable as well!'
            )
          )
        )
      )
    )
  );
};
/* eslint-disable no-console */


it('renders without proptype errors', function () {
  // Make sure that proptype errors cause test failures
  var error = console.error;
  // $FlowFixMe: reassignment of console.error
  console.error = jest.fn(function (msg) {
    throw new Error(msg);
  });

  var renderer = _reactTestRenderer2.default.create(_react2.default.createElement(App, null));
  expect(renderer.toJSON()).not.toBeNull();

  // $FlowFixMe: reassignment of console.error
  console.error = error;
});

var BrokenProps = function BrokenProps() {
  return _react2.default.createElement(
    _.Page,
    null,
    _react2.default.createElement(
      _.Row,
      null,
      _react2.default.createElement(
        _.Column,
        { sm: 8, smShift: 'two', lg: 6, lgShift: 3 },
        _react2.default.createElement(
          'h1',
          null,
          'This is a column that is centered using the shift props'
        )
      )
    )
  );
};

it('triggers proptype error', function () {
  var errorTriggered = false;

  // Make sure that proptype errors cause test failures
  var error = console.error;
  // $FlowFixMe: reassignment of console.error
  console.error = jest.fn(function () {
    errorTriggered = true;
  });

  var renderer = _reactTestRenderer2.default.create(_react2.default.createElement(BrokenProps, null));
  expect(renderer.toJSON()).not.toBeNull();
  expect(errorTriggered).toBe(true);

  // $FlowFixMe: reassignment of console.error
  console.error = error;
});