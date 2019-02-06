import { validGiftCard } from './giftCard';
import chai from '../test/support/chai';

const expect = chai.expect;

describe('validGiftCard', () => {
  it('should return false if no data', () => {
    expect(validGiftCard()).equal(false);
  });

  it('should return false if missing gift card not complete', () => {
    const giftCard = {
      gift_card_value: 100,
      currency: 'AUD'
    };
    expect(validGiftCard(giftCard)).equal(false);
  });

  it('should return false if not valid date', () => {
    const giftCard = {
      gift_card_value: 100,
      currency: 'AUD',
      personalised: {},
      expires_at: 'HAN SHOT FIRST',
      gift_card_code: 'ASDF'
    };
    expect(validGiftCard(giftCard)).equal(false);
  });

  it('should return true gift card has all values', () => {
    const giftCard = {
      gift_card_value: 100,
      currency: 'AUD',
      personalised: {},
      expires_at: '2022-01-08T23:59:59.000Z',
      gift_card_code: 'ASDF'
    };
    expect(validGiftCard(giftCard)).equal(true);
  });
});
