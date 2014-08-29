if (process.env.NODE_ENV === 'production') {
  require('newrelic');
}

var express = require('express'),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser'),
  mailer = require('./api/services/Mailer');

var portNum = process.env.PORT || 8080;

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: false
  }))
  .use(serveStatic(__dirname + '/assets'))
  .post('/lead/create', function (req, res) {
    mailer.mail({
      from:    'Alex Robertson <alex@someoddpilot.com>',
      to:      'Alex Robertson <alex@someoddpilot.com>',
      subject: 'SYWAW',
      text:    'So you want a website?'
    }, function () {

      res.json({
        status: 'ok',
        data: req.body
      });
    });
  })
  .listen(portNum);

console.log('Serving to http://localhost:' + portNum)
