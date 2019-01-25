const express = require('express')
const bodyParser = require('body-parser')
const wkhtmltopdf = require('wkhtmltopdf')

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

  app.get('/api/pdf/gift-card/:id', (req, res, next) => {
    wkhtmltopdf('<h1>Test</h1><p>Hello world</p>')
      .pipe(res);
  })

  return app
}
