'use strict';

var isDate = function isDate(date) {
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

var validGiftCard = function validGiftCard(data) {
  if (!data) {
    return false;
  }
  return !!data.gift_card_code && isDate(data.expires_at) && !!data.gift_card_value && !!data.personalised && !!data.currency;
};

module.exports = {
  validGiftCard: validGiftCard
};