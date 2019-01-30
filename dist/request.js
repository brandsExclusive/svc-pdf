'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");

var defaultOptions = {
  method: 'GET'
};
module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(destination, inOptions) {
    var options, response, error;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = Object.assign({}, defaultOptions, inOptions);
            _context.next = 3;
            return (0, _nodeFetch2.default)(destination, options);

          case 3:
            response = _context.sent;

            if (response) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', {
              error: {
                status: 500,
                message: 'Something went wrong'
              }
            });

          case 6:
            if (response.ok) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return response.text();

          case 9:
            error = _context.sent;

            console.log('response :', error);
            return _context.abrupt('return', {
              error: {
                status: response.status,
                message: response.statusText || error
              }
            });

          case 12:
            return _context.abrupt('return', response.json());

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();