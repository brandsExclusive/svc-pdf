'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

var _formatCurrency = require('../../lib/formatCurrency');

var _formatDate = require('../../lib/formatDate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(_Component2.default, {
    items: props.items
  });
};

exports.default = App;