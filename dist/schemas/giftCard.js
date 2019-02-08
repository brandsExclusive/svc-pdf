'use strict';

exports.schema = {
  title: 'Luxury Escapes Gift Card PDF Schema',
  type: 'object',
  properties: {
    gift_card_code: {
      type: 'string'
    },
    expires_at: {
      type: 'string'
    },
    gift_card_value: {
      type: 'string'
    },
    currency: {
      type: 'string'
    },
    personalised: {
      type: 'object',
      properties: {
        to: {
          type: 'string'
        },
        from: {
          type: 'string'
        },
        message: {
          type: 'string'
        }
      }
    }
  },
  required: ['gift_card_code', 'expires_at', 'gift_card_value', 'currency']
};