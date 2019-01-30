'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

var _formatCurrency = require('../../lib/formatCurrency');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function formatDate(date) {
  var monthIdx = date.getMonth();
  var monthStr = fullMonths[monthIdx];

  return date.getDate() + ' ' + monthStr + ' ' + date.getFullYear();
};

exports.default = function (props) {
  var giftCardAmount = (0, _formatCurrency.formatDynamicAmount)(props.gift_card_value, props.currency);
  var expiryDate = formatDate(new Date(props.expires_at));
  return _react2.default.createElement(_Component2.default, {
    expiry: expiryDate,
    amount: giftCardAmount,
    personalisation: props.personalised,
    code: props.gift_card_code
  });
};