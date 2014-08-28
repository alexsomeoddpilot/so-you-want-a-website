var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var config = require('./../../config');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Mandrill',
  auth: {
    user: config.MANDRILL_USERNAME,
    pass: config.MANDRILL_APIKEY
  }
}));

module.exports = {
  mail: function(message, callback) {
    // send mail with defined transport object
    smtpTransport.sendMail(message, function (error, response) {
      if (error) {
        console.log(error);
        callback();
        return;
      }

      console.log('Message sent: ' + response.message);
      callback();
    });
  }
};
