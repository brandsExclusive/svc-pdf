'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(_Component2.default, {
    items: props.items,
    date: props.date,
    customer_name: props.customer_name,
    order_currency: props.order_currency,
    billing_country: props.billing_country
  });
};

exports.default = App;