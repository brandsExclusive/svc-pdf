import express from 'express';
import bodyParser from 'body-parser';
import wkhtmltopdf from 'wkhtmltopdf';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import auth from 'lib-auth-roles';

import App from './pdf/GiftCard/App';
import { validGiftCard } from './lib/giftCard';

wkhtmltopdf.command = process.env.WKHTMLTOPDF_COMMAND;

exports.getServer = () => {
  const app = express();
  const verifyUserSignature = auth.verifyUserSignature({
    endpoint: process.env.API_ENDPOINT
  });

  app.use(function(req, res, next) {
    // add CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, account, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Vary', 'Origin');
    next();
  });

  app.use(bodyParser.json());

  app.post('/api/pdf/gift-cards', verifyUserSignature, (req, res, next) => {
    const options = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      title: 'Luxury Escapes Gift Card'
    };
    const indexFile = path.resolve('./index.html');
    const { giftCard } = req.body;
    if (!validGiftCard(giftCard)) {
      console.error('Missing details', giftCard);
      return res.status(500).send('Missing Gift Card Details');
    }
    const app = ReactDOMServer.renderToString(<App {...giftCard} />);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      return wkhtmltopdf(
        data.replace('<div id="root"></div>', `${app}`),
        options
      ).pipe(res);
    });
  });

  return app;
};
