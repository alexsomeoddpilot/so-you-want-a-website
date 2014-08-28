var express = require('express'),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser');

var portNum = process.env.PORT || 8080;

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
  .listen(portNum);

console.log('Serving to http://localhost:' + portNum)
