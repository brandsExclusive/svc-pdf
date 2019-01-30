import React from 'react';
import Component from './Component';

import { formatDynamicAmount } from '../../lib/formatCurrency'

const fullMonths = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]

const formatDate = (date) => {
  const monthIdx = date.getMonth()
  const monthStr = fullMonths[monthIdx]

  return `${date.getDate()} ${monthStr} ${date.getFullYear()}`
}

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
