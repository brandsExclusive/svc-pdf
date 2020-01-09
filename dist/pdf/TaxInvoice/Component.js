'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _formatCurrency = require('../../lib/formatCurrency');

var _formatDate = require('../../lib/formatDate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var items = _ref.items,
      date = _ref.date,
      customer_name = _ref.customer_name,
      order_currency = _ref.order_currency;

  var logoId = 'https://res.cloudinary.com/lux-group/image/upload/v1576811154/LE_Logo_black_jp50wa.png';
  var totalAmount = function totalAmount(total_price) {
    return (0, _formatCurrency.formatDynamicAmount)(total_price, order_currency);
  };

  var formattedDate = (0, _formatDate.formatDate)(new Date(date));
  var subTotal = items.reduce(function (sum, item) {
    return sum + parseInt(item.total_price);
  }, 0);

  var gstTotalPrice = parseInt(subTotal) / 11;
  var excGSTTotal = parseInt(subTotal) - gstTotalPrice;
  var showGST = order_currency === 'AUD';

  return _react2.default.createElement(
    'div',
    { className: 'root', style: _style2.default.root },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { style: _style2.default.logo, src: logoId, alt: 'Luxury Escapes Invoice' })
    ),
    _react2.default.createElement(
      'div',
      { style: _style2.default.pageHeader },
      _react2.default.createElement(
        'div',
        null,
        'Tax Invoice'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Invoice Date: ',
        formattedDate,
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _style2.default.name },
      'Customer Name: ',
      customer_name
    ),
    _react2.default.createElement(
      'div',
      { style: _style2.default.section },
      _react2.default.createElement(
        'div',
        { style: _style2.default.tableContainer },
        _react2.default.createElement(
          'table',
          { style: _style2.default.table },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                '#'
              ),
              _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'Description',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'Description'
                )
              ),
              _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'Quantity',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'Quantity'
                )
              ),
              !showGST && _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'Price',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'Price'
                )
              ),
              showGST && [_react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'Price exc GST ',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'Price excl GST'
                )
              ), _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'GST',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'GST 10%'
                )
              ), _react2.default.createElement(
                'th',
                { style: _style2.default.th },
                'Price incl GST',
                _react2.default.createElement(
                  'div',
                  { style: _style2.default.header },
                  'Price incl GST'
                )
              )]
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            items.map(function (item, index) {
              var gstPrice = item.total_price / 11;
              var excGSTPrice = item.total_price - gstPrice;

              return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  index + 1
                ),
                _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  item.description
                ),
                _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  '1'
                ),
                !showGST && _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  totalAmount(item.total_price)
                ),
                showGST && [_react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  totalAmount(excGSTPrice)
                ), _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  ' ',
                  totalAmount(gstPrice)
                ), _react2.default.createElement(
                  'td',
                  { style: _style2.default.td },
                  totalAmount(item.total_price)
                )]
              );
            })
          )
        )
      )
    ),
    _react2.default.createElement('div', { style: _style2.default.hr }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'table',
        { style: _style2.default.tableTotal },
        _react2.default.createElement(
          'tbody',
          null,
          !showGST && _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              'Sub Total'
            ),
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              totalAmount(subTotal)
            )
          ),
          showGST && [_react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              'Sub Total(excl GST)'
            ),
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              totalAmount(excGSTTotal)
            )
          ), _react2.default.createElement(
            'tr',
            { style: _style2.default.totalPriceRow },
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              'Total GST 10%'
            ),
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              totalAmount(gstTotalPrice)
            )
          ), _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              'Invoice Total'
            ),
            _react2.default.createElement(
              'td',
              { style: _style2.default.tdTotal },
              totalAmount(subTotal)
            )
          )]
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _style2.default.abn },
      'This tax invoice is provided for the purposes of GST only. ABN: 99 139 798 191'
    )
  );
};

exports.default = Component;