var connect = require('connect'),
  serveStatic = require('serve-static');

connect()
  .use(serveStatic(__dirname + '/assets'))
  .listen(8080);
