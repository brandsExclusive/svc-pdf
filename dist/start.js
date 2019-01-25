'use strict';

require('dotenv-safe').config({
  path: '.env'
});

var server = require('./server');

var app = server.getServer().listen(process.env.PORT, function () {
  var _app$address = app.address(),
      address = _app$address.address,
      port = _app$address.port;

  console.log('Listening at http://' + address + ':' + port);
});