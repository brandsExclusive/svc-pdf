'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoId = 'https://res.cloudinary.com/lux-group/image/upload/f_auto,fl_progressive,q_auto:eco,c_scale,w_1200/luxuryescapes/luxuryescapes-logo';
var bowId = 'https://res.cloudinary.com/lux-group/image/upload/f_auto,fl_progressive,q_auto:eco/luxuryescapes/gift-wrap-large';

var redeemInstructions = 'Become a member at LuxuryEscapes.com to choose your perfect escape. At checkout, enter your unique voucher code and your account will be credited with the value of this gift card. The amount will be deducted from the final cost of your chosen holiday. Gift card valid for three years from purchase and must be used by the expiry date.';

var Component = function Component(_ref) {
  var personalisation = _ref.personalisation,
      code = _ref.code,
      expiry = _ref.expiry,
      amount = _ref.amount;
  return _react2.default.createElement(
    'div',
    { className: 'root', style: _style2.default.root },
    _react2.default.createElement(
      'div',
      { style: _style2.default.body },
      _react2.default.createElement(
        'picture',
        { style: _style2.default.picture },
        _react2.default.createElement('img', { style: _style2.default.bow, src: bowId })
      ),
      _react2.default.createElement(
        'div',
        { style: _style2.default.section },
        _react2.default.createElement(
          'picture',
          { style: _style2.default.picture },
          _react2.default.createElement('img', { style: _style2.default.logo, src: logoId })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: _style2.default.section },
        _react2.default.createElement(
          'div',
          { style: _style2.default.amount },
          amount
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.subHeading },
          'GIFT VOUCHER'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: _style2.default.personalisation },
        _react2.default.createElement(
          'div',
          { style: _style2.default.leftColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.personalisationSection },
            'To'
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.rightColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.line },
            _react2.default.createElement(
              'div',
              null,
              personalisation.to
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.messsage },
          _react2.default.createElement(
            'div',
            { style: _style2.default.leftColumn },
            _react2.default.createElement(
              'div',
              { style: _style2.default.personalisationSection },
              'Message'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _style2.default.rightColumn },
            _react2.default.createElement(
              'div',
              { style: _style2.default.line },
              _react2.default.createElement(
                'div',
                null,
                personalisation.message
              )
            ),
            _react2.default.createElement('div', { style: _style2.default.line }),
            _react2.default.createElement('div', { style: _style2.default.line })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.leftColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.personalisationSection },
            'From'
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.rightColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.line },
            _react2.default.createElement(
              'div',
              null,
              personalisation.from
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { style: _style2.default.footer },
        _react2.default.createElement(
          'div',
          { style: _style2.default.leftColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerSection },
            'Voucher Code:'
          ),
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerText },
            code
          ),
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerSection },
            'Expiry Date:'
          ),
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerText },
            expiry
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.rightColumn },
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerSection },
            'How To Redeem:'
          ),
          _react2.default.createElement(
            'div',
            { style: _style2.default.footerText },
            redeemInstructions
          )
        )
      )
    )
  );
};

exports.default = Component;