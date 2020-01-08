import React from 'react';

import style from './style';
import { formatDynamicAmount } from '../../lib/formatCurrency';
import { formatDate } from '../../lib/formatDate';
const Component = ({ items, date, customer_name, order_currency }) => {
  const logoId =
    'https://res.cloudinary.com/lux-group/image/upload/v1576811154/LE_Logo_black_jp50wa.png';
  const totalAmount = total_price =>
    formatDynamicAmount(total_price, order_currency);

  const formattedDate = formatDate(new Date(date));
  const subTotal = items.reduce((sum, item) => {
    return sum + item.total_price;
  }, 0);

  const showGST = order_currency === 'AUD';

  return (
    <div className="root" style={style.root}>
      <div>
        <img style={style.logo} src={logoId} alt="Luxury Escapes Invoice" />
      </div>
      <div style={style.pageHeader}>
        <div>Tax Invoice</div>
        <div>Invoice Date: {formattedDate} </div>
      </div>
      <div style={style.name}>Customer Name: {customer_name}</div>
      <div style={style.section}>
        <div style={style.tableContainer}>
          <table style={style.table}>
            <thead>
              <tr>
                <th style={style.th}>#</th>
                <th style={style.th}>
                  Description<div style={style.header}>Description</div>
                </th>
                <th style={style.th}>
                  Quantity<div style={style.header}>Quantity</div>
                </th>
                {!showGST && (
                  <th style={style.th}>
                    Price<div style={style.header}>Price</div>
                  </th>
                )}
                {showGST && [
                  <th style={style.th}>
                    Price exc GST <div style={style.header}>Price exc GST</div>
                  </th>,
                  <th style={style.th}>
                    GST<div style={style.header}>GST 10%</div>
                  </th>,
                  <th style={style.th}>
                    Price incl GST<div style={style.header}>Price incl GST</div>
                  </th>
                ]}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr>
                    <td style={style.td}>{index + 1}</td>
                    <td style={style.td}>{item.description}</td>
                    <td style={style.td}>1</td>
                    {!showGST && (
                      <td style={style.td}>{totalAmount(item.total_price)}</td>
                    )}
                    {showGST && [
                      <td style={style.td}>{totalAmount(item.total_price)}</td>,
                      <td style={style.td}>
                        {' '}
                        {totalAmount(item.total_price * 0.1)}
                      </td>,
                      <td style={style.td}>
                        {totalAmount(item.total_price * 1.1)}
                      </td>
                    ]}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div style={style.hr}></div>
      <div>
        <table style={style.tableTotal}>
          <tbody>
            {!showGST && (
              <tr>
                <td style={style.tdTotal}>Sub Total</td>
                <td style={style.tdTotal}>{totalAmount(subTotal)}</td>
              </tr>
            )}
            {showGST && [
              <tr>
                <td style={style.tdTotal}>Sub Total(excl GST)</td>
                <td style={style.tdTotal}>{totalAmount(subTotal)}</td>
              </tr>,
              <tr style={style.totalPriceRow}>
                <td style={style.tdTotal}>Total GST 10%</td>
                <td style={style.tdTotal}>{totalAmount(subTotal * 0.1)}</td>
              </tr>,
              <tr>
                <td style={style.tdTotal}>Invoice Total</td>
                <td style={style.tdTotal}>{totalAmount(subTotal * 1.1)}</td>
              </tr>
            ]}
          </tbody>
        </table>
      </div>
      <div style={style.abn}>
        This tax invoice is provided for the purposes of GST only. ABN: 99 139
        798 191
      </div>
    </div>
  );
};

export default Component;
