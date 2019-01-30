'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDynamicAmount = formatDynamicAmount;
exports.formatPreciseAmount = formatPreciseAmount;
exports.formatRoundedAmount = formatRoundedAmount;
exports.formatDynamicAmountWithDollarType = formatDynamicAmountWithDollarType;
exports.formatPreciseAmountWithDollarType = formatPreciseAmountWithDollarType;
exports.formatRoundedAmountWithDollarType = formatRoundedAmountWithDollarType;

var _currencyFormatter = require('currency-formatter');

var _currencyFormatter2 = _interopRequireDefault(_currencyFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDynamicAmount(amount, currencyCode) {
  return _currencyFormatter2.default.format(amount, { code: currencyCode, precision: amount % 1 ? 2 : 0 });
}

function formatPreciseAmount(amount, currencyCode) {
  return _currencyFormatter2.default.format(amount, { code: currencyCode, precision: 2 });
}

function formatRoundedAmount(amount, currencyCode) {
  return _currencyFormatter2.default.format(amount, { code: currencyCode, precision: 0 });
}

function formatDynamicAmountWithDollarType(amount, currencyCode) {
  return addDollarType(formatDynamicAmount(amount, currencyCode), currencyCode);
}

function formatPreciseAmountWithDollarType(amount, currencyCode) {
  return addDollarType(formatPreciseAmount(amount, currencyCode), currencyCode);
}

function formatRoundedAmountWithDollarType(amount, currencyCode) {
  return addDollarType(formatRoundedAmount(amount, currencyCode), currencyCode);
}

function addDollarType(formattedAmount, currencyCode) {
  return formattedAmount.match(/^\$/) ? '' + currencyCode + formattedAmount : formattedAmount;
}