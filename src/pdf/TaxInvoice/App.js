import React from 'react';
import Component from './Component';

import { formatDynamicAmount } from '../../lib/formatCurrency';
import { formatDate } from '../../lib/formatDate';

const App = (props) => {
  return (
    <Component
      items={props.items}
    />
  );
};

export default App;
