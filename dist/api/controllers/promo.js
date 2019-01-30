'use strict';

var _request = require('../../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiHost = process.env.API_ENDPOINT;

exports.getGiftCard = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var cookie, opts, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookie = req.headers.cookie;
            opts = {
              headers: { Cookie: cookie }
            };
            _context.next = 4;
            return (0, _request2.default)(apiHost + ('/api/gift-card/code/' + req.params.id), opts);

          case 4:
            response = _context.sent;

            if (response.result) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', {
              error: {
                status: 500,
                message: 'Something went wrong'
              }
            });

          case 7:
            return _context.abrupt('return', response.result);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();