'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _sandbox = require('./test/support/sandbox');

var _sandbox2 = _interopRequireDefault(_sandbox);

var _chai = require('./test/support/chai');

var _chai2 = _interopRequireDefault(_chai);

var _libAuthMiddleware = require('@luxuryescapes/lib-auth-middleware');

var auth = _interopRequireWildcard(_libAuthMiddleware);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv-safe').config({
  path: '.env'
});

var expect = _chai2.default.expect;


var testServer = null;

describe('Server', function () {
  describe('Gift cards route - /api/pdf/gift-cards', function () {
    beforeEach(function () {
      _sandbox2.default.stub(auth, 'verifyUserSignature').callsFake(function () {
        return function (req, res, next) {
          next();
        };
      });

      testServer = _server2.default.getServer();
    });
    afterEach(function () {
      _sandbox2.default.restore();
    });
    this.timeout(5000);

    it('responds with status 500 if missing gift card details', function (done) {
      (0, _supertest2.default)(testServer).post('/api/pdf/gift-cards').expect(500).end(function (err) {
        if (err) return done(err);
        done();
      });
    });

    it('responds with status 500 if expiry is not date', function (done) {
      var body = {
        gift_card_value: 100,
        currency: 'AUD',
        personalised: {},
        expires_at: 'Nek minute',
        gift_card_code: 'ASDF'
      };
      (0, _supertest2.default)(testServer).post('/api/pdf/gift-cards').send(body).expect(500).end(function (err) {
        if (err) return done(err);
        done();
      });
    });

    it('responds with status 200 if has all data', function (done) {
      var body = {
        gift_card_value: 100,
        currency: 'AUD',
        personalised: {},
        expires_at: '2022-01-08T23:59:59.000Z',
        gift_card_code: 'ASDF'
      };
      (0, _supertest2.default)(testServer).post('/api/pdf/gift-cards').send(body).end(function (err, res) {
        if (err) return done(err);
        expect(res).to.be.a.ReadableStream;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
});