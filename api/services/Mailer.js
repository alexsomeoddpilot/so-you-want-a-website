var nodemailer = require('nodemailer');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Mandrill',
    auth: {
        user: sails.config.mandrill.user,
        pass: sails.config.mandrill.pass
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
