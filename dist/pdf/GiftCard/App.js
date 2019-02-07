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
  var giftCardAmount = (0, _formatCurrency.formatDynamicAmount)(props.gift_card_value, props.currency);
  var expiryDate = (0, _formatDate.formatDate)(new Date(props.expires_at));
  return _react2.default.createElement(_Component2.default, {
    expiry: expiryDate,
    amount: giftCardAmount,
    personalisation: props.personalised,
    code: props.gift_card_code
  });
};

exports.default = App;