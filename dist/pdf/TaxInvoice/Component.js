'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var items = _ref.items;

  return _react2.default.createElement(
    'div',
    { className: 'root', style: _style2.default.root },
    _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            '#'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Quantity'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Price'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        items.map(function (item) {
          return _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '1'
            ),
            _react2.default.createElement(
              'td',
              null,
              item.description
            ),
            _react2.default.createElement(
              'td',
              null,
              '1'
            ),
            _react2.default.createElement(
              'td',
              null,
              item.price
            )
          );
        })
      )
    )
  );
};

exports.default = Component;