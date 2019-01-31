import React from 'react';
import Component from './Component';

import { formatDynamicAmount } from '../../lib/formatCurrency'
import { formatDate } from '../../lib/formatDate'

export default (props) => {
  const giftCardAmount = formatDynamicAmount(props.gift_card_value, props.currency)
  const expiryDate = formatDate(new Date(props.expires_at))
  return (
    <Component
      expiry={expiryDate}
      amount={giftCardAmount}
      personalisation={props.personalised}
      code={props.gift_card_code}
    />
  )
};
