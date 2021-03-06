require('dotenv-safe').config();

import express from 'express';
import bodyParser from 'body-parser';
import wkhtmltopdf from 'wkhtmltopdf';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as auth from '@luxuryescapes/lib-auth-middleware';

import AppTaxInvoice from './pdf/TaxInvoice/App';
import AppGiftCard from './pdf/GiftCard/App';

import { validGiftCard, giftCardMap } from './lib/giftCard';
import schema from './schemas/giftCard';

wkhtmltopdf.command = process.env.WKHTMLTOPDF_COMMAND;

exports.getServer = () => {
  const app = express();
  const verifyUserSignature = auth.verifyUserSignature({
    endpoint: process.env.API_HOST
  });

  app.use(bodyParser.json());

  const debug = process.env.APP_ENV === 'test';

  app.use(function(req, res, next) {
    // add CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, x-stormpath-agent, Content-Type, Accept, account, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Vary', 'Origin');
    next();
  });

  app.options('/api/pdf/tax-invoice', (req, res) => {
    res.status(200).json({
      post: {
        params: {},
        body: schema
      }
    });
  });

  app.post('/api/pdf/gift-cards', verifyUserSignature, (req, res) => {
    const pdfOptions = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      encoding: 'utf8',
      title: 'Luxury Escapes Gift Card',
      debug
    };
    const indexFile = path.resolve('./index.html');
    const giftCard = giftCardMap(req.body);
    if (!validGiftCard(giftCard)) {
      console.error('Missing details', giftCard);
      return res.status(500).send('Missing Gift Card Details');
    }
    const app = ReactDOMServer.renderToString(<AppGiftCard {...giftCard} />);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      res.type('pdf');
      return wkhtmltopdf(
        data.replace('<div id="root"></div>', `${app}`),
        pdfOptions
      ).pipe(res);
    });
  });

  app.post('/api/pdf/tax-invoice', (req, res) => {
    const pdfOptions = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      encoding: 'utf8',
      title: 'Luxury Escapes Tax Invoice',
      debug
    };

    const indexFile = path.resolve('./index.html');
    const app = ReactDOMServer.renderToString(
      <AppTaxInvoice
        items={req.body.list}
        date={req.body.date}
        customer_name={req.body.customer_name}
        order_currency={req.body.order_currency}
        billing_country={req.body.billing_country}
      />
    );
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      res.type('pdf');
      return wkhtmltopdf(
        data.replace('<div id="root"></div>', `${app}`),
        pdfOptions
      ).pipe(res);
    });
  });

  return app;
};
