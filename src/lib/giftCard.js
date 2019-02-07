const isDate = date => {
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

const validGiftCard = data => {
  if (!data) {
    return false;
  }
  return (
    !!data.gift_card_code &&
    isDate(data.expires_at) &&
    !!data.gift_card_value &&
    !!data.personalised &&
    !!data.currency
  );
};

const giftCardMap = data => {
  return {
    gift_card_code: data.gift_card_code || '',
    expires_at: data.expires_at || '',
    gift_card_value: data.gift_card_value || '',
    personalised: data.personalised || {},
    currency: data.currency || ''
  };
};

module.exports = {
  validGiftCard,
  giftCardMap
};
