'use strict';

var _currencyFormatter = require('currency-formatter');

var _currencyFormatter2 = _interopRequireDefault(_currencyFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatDynamicAmount = function formatDynamicAmount(amount, currencyCode) {
  return _currencyFormatter2.default.format(amount, {
    code: currencyCode,
    precision: amount % 1 ? 2 : 0
  });
};

module.exports = {
  formatDynamicAmount: formatDynamicAmount
};