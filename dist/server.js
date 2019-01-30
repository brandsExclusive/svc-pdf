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

var _promo = require('./api/controllers/promo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

  app.get('/api/pdf/gift-cards/:id', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var options, indexFile, giftCard, app;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                orientation: 'portrait',
                pageSize: 'A4',
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                dpi: 300,
                title: 'Luxury Escapes Gift Card'
              };
              indexFile = _path2.default.resolve('./index.html');
              _context.next = 4;
              return (0, _promo.getGiftCard)(req);

            case 4:
              giftCard = _context.sent;

              if (!giftCard.error) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', res.status(giftCard.error.status).send(giftCard.error.message));

            case 7:
              app = _server2.default.renderToString(_react2.default.createElement(_App2.default, giftCard));

              _fs2.default.readFile(indexFile, 'utf8', function (err, data) {
                if (err) {
                  console.error('Something went wrong:', err);
                  return res.status(500).send('Error!');
                }
                return (0, _wkhtmltopdf2.default)(data.replace('<div id="root"></div>', '' + app), options).pipe(res);
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  return app;
};