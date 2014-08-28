module.exports = (function () {
  if (process.env.NODE_ENV === 'production') {
    return process.env;
  }
  return require('./environments/dev.js');
}());
