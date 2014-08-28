var express = require('express'),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser');

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: false
  }))
  .use(serveStatic(__dirname + '/assets'))
  .post('/lead/create', function (req, res) {
    res.json({
      status: 'ok',
      data: req.body
    });
  })
  .listen(8080);

console.log('Serving to http://localhost:8080')
