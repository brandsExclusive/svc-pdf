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

var _App = require('./pdf/GiftCard/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wkhtmltopdf2.default.command = process.env.WKHTMLTOPDF_COMMAND;

exports.getServer = function () {
  var app = (0, _express2.default)();

  app.use(function (req, res, next) {
    // add CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, account, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Vary', 'Origin');
    next();
  });

  app.use(_bodyParser2.default.json());

  app.get('/api/pdf/gift-cards/:id', function (req, res, next) {
    var indexFile = _path2.default.resolve('./index.html');
    var app = _server2.default.renderToString(_react2.default.createElement(_App2.default, null));
    _fs2.default.readFile(indexFile, 'utf8', function (err, data) {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      return (0, _wkhtmltopdf2.default)(data.replace('<div id="root"></div>', '<div id="root">' + app + '</div>')).pipe(res);
    });
  });

  return app;
};