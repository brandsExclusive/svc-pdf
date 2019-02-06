const validGiftCard = data => {
  return (
    !!data.gift_card_code &&
    !!data.expires_at &&
    !!data.gift_card_value &&
    !!data.personalised &&
    !!data.currency
  );
};

module.exports = {
  validGiftCard
};
