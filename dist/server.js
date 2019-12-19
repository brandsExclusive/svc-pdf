'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _wkhtmltopdf = require('wkhtmltopdf');

var _wkhtmltopdf2 = _interopRequireDefault(_wkhtmltopdf);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _libAuthRoles = require('lib-auth-roles');

var _libAuthRoles2 = _interopRequireDefault(_libAuthRoles);

var _App = require('./pdf/TaxInvoice/App');

var _App2 = _interopRequireDefault(_App);

var _App3 = require('./pdf/GiftCard/App');

var _App4 = _interopRequireDefault(_App3);

var _giftCard = require('./lib/giftCard');

var _giftCard2 = require('./schemas/giftCard');

var _giftCard3 = _interopRequireDefault(_giftCard2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv-safe').config();

_wkhtmltopdf2.default.command = process.env.WKHTMLTOPDF_COMMAND;

exports.getServer = function () {
  var app = (0, _express2.default)();
  var verifyUserSignature = _libAuthRoles2.default.verifyUserSignature({
    endpoint: process.env.API_HOST
  });

  app.use(_bodyParser2.default.json());

  var debug = process.env.APP_ENV === 'test';

  app.use(function (req, res, next) {
    // add CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, x-stormpath-agent, Content-Type, Accept, account, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Vary', 'Origin');
    next();
  });

  app.options('/api/pdf/tax-invoice', function (req, res) {
    res.status(200).json({
      post: {
        params: {},
        body: _giftCard3.default
      }
    });
  });

  app.post('/api/pdf/gift-cards', verifyUserSignature, function (req, res) {
    var pdfOptions = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      encoding: 'utf8',
      title: 'Luxury Escapes Gift Card',
      debug: debug
    };
    var indexFile = _path2.default.resolve('./index.html');
    var giftCard = (0, _giftCard.giftCardMap)(req.body);
    if (!(0, _giftCard.validGiftCard)(giftCard)) {
      console.error('Missing details', giftCard);
      return res.status(500).send('Missing Gift Card Details');
    }
    var app = _server2.default.renderToString(_react2.default.createElement(_App4.default, giftCard));
    _fs2.default.readFile(indexFile, 'utf8', function (err, data) {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      res.type('pdf');
      return (0, _wkhtmltopdf2.default)(data.replace('<div id="root"></div>', '' + app), pdfOptions).pipe(res);
    });
  });

  app.post('/api/pdf/tax-invoice', function (req, res) {
    var pdfOptions = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      encoding: 'utf8',
      title: 'Luxury Escapes Tax Invoice',
      debug: debug
    };

    var indexFile = _path2.default.resolve('./index.html');
    console.log(req.body, "*********");
    var app = _server2.default.renderToString(_react2.default.createElement(_App2.default, { items: req.body }));
    console.log('any');
    _fs2.default.readFile(indexFile, 'utf8', function (err, data) {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      res.type('pdf');
      return (0, _wkhtmltopdf2.default)(data.replace('<div id="root"></div>', '' + app), pdfOptions).pipe(res);
    });
  });

  return app;
};