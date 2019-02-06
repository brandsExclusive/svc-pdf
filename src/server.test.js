require('dotenv-safe').config({
  path: '.env'
});

import app from './server';
import request from 'supertest';
import sandbox from './test/support/sandbox';
import chai from './test/support/chai';
import auth from 'lib-auth-roles';

const { expect, assert } = chai;

let testServer = null;

describe('Server', function() {
  describe('Gift cards route - /api/pdf/gift-cards', function() {
    beforeEach(() => {
      sandbox
        .stub(auth, 'verifyUserSignature')
        .callsFake(() => (req, res, next) => {
          next();
        });

      testServer = app.getServer();
    });
    afterEach(() => {
      sandbox.restore();
    });
    this.timeout(5000);

    it('responds with status 500 if missing gift card details', function(done) {
      request(testServer)
        .post('/api/pdf/gift-cards')
        .expect(500)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with status 500 if expiry is not date', function(done) {
      const body = {
        giftCard: {
          gift_card_value: 100,
          currency: 'AUD',
          personalised: {},
          expires_at: 'Nek minute',
          gift_card_code: 'ASDF'
        }
      };
      request(testServer)
        .post('/api/pdf/gift-cards')
        .send(body)
        .expect(500)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with status 200 if has all data', function(done) {
      const body = {
        giftCard: {
          gift_card_value: 100,
          currency: 'AUD',
          personalised: {},
          expires_at: '2022-01-08T23:59:59.000Z',
          gift_card_code: 'ASDF'
        }
      };
      request(testServer)
        .post('/api/pdf/gift-cards')
        .send(body)
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.be.a.ReadableStream;
          expect(res).to.have.property('status', 200);
          done();
        });
    });
  });
});
