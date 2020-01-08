import React from 'react';
import Component from './Component';

import { formatDynamicAmount } from '../../lib/formatCurrency';
import { formatDate } from '../../lib/formatDate';

const App = (props) => {
  return (
    <Component
      items={props.items}
      date={props.date}
      customer_name={props.customer_name}
      order_currency={props.order_currency}
    />
  );
};

export default App;
