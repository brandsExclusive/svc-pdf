import React from 'react';
import Component from './Component';

const App = props => {
  return (
    <Component
      items={props.items}
      date={props.date}
      customer_name={props.customer_name}
      order_currency={props.order_currency}
      billing_country={props.billing_country}
    />
  );
};

export default App;
