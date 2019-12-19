import React from 'react';

import style from './style';

const Component = ({ items }) => {
  return (
    <div className="root" style={style.root}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr>
                <td>1</td>
                <td>{item.description}</td>
                <td>1</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Component;
