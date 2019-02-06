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

module.exports = {
  validGiftCard
};
