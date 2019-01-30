import express from 'express';
import bodyParser from 'body-parser';
import wkhtmltopdf from 'wkhtmltopdf';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './pdf/GiftCard/App';
import { getGiftCard } from './api/controllers/promo'

wkhtmltopdf.command = process.env.WKHTMLTOPDF_COMMAND

exports.getServer = () => {
  const app = express()

  app.use(function (req, res, next) {
    // add CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, account, Authorization'
    )
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Vary', 'Origin')
    next()
  })

  app.use(bodyParser.json())

  app.get('/api/pdf/gift-cards/:id', async (req, res, next) => {
    const options = {
      orientation: 'portrait',
      pageSize: 'A4',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      dpi: 300,
      title: 'Luxury Escapes Gift Card'
    }
    const indexFile = path.resolve('./index.html');
    const giftCard = await getGiftCard(req)
    if (giftCard.error) {
      return res.status(giftCard.error.status).send(giftCard.error.message)
    }
    const app = ReactDOMServer.renderToString(<App {...giftCard} />);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Error!');
      }
      return wkhtmltopdf(
        data.replace('<div id="root"></div>', `${app}`), options)
        .pipe(res);
    });

  })

  return app
}
