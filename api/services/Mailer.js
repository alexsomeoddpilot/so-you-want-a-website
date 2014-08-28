var nodemailer = require('nodemailer');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Mandrill',
  auth: {
    user: process.env.MANDRILL_USERNAME,
    pass: process.env.MANDRILL_APIKEY
  }
});

module.exports = {
  mail: function(message, callback) {
    // send mail with defined transport object
    smtpTransport.sendMail(message, function (error, response) {
      if (error) {
        sails.log.verbose(error);
        callback();
        return;
      }

      sails.log.verbose('Message sent: ' + response.message);
      callback();
    });
  }
};
