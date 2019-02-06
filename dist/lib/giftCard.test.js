'use strict';

var _giftCard = require('./giftCard');

var _chai = require('../test/support/chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('validGiftCard', function () {
  it('should return false if no data', function () {
    expect((0, _giftCard.validGiftCard)()).equal(false);
  });

  it('should return false if missing gift card not complete', function () {
    var giftCard = {
      gift_card_value: 100,
      currency: 'AUD'
    };
    expect((0, _giftCard.validGiftCard)(giftCard)).equal(false);
  });

  it('should return false if not valid date', function () {
    var giftCard = {
      gift_card_value: 100,
      currency: 'AUD',
      personalised: {},
      expires_at: 'HAN SHOT FIRST',
      gift_card_code: 'ASDF'
    };
    expect((0, _giftCard.validGiftCard)(giftCard)).equal(false);
  });

  it('should return true gift card has all values', function () {
    var giftCard = {
      gift_card_value: 100,
      currency: 'AUD',
      personalised: {},
      expires_at: '2022-01-08T23:59:59.000Z',
      gift_card_code: 'ASDF'
    };
    expect((0, _giftCard.validGiftCard)(giftCard)).equal(true);
  });
});