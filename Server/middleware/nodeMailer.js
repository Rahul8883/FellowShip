const nodeMailer = require('nodemailer');
exports.sendMail = (email, url) => {
    console.log("email in node mailer", email);
    console.log("url in node mailer", url);
    var smtpTransport = nodeMailer.createTransport({
        service: 'Gmail', // sets automatically host, port and connection security settings
        auth: {
            user: process.env.EMAIL,
            pass: Process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'rahulranjan700@gmail.com',
        to: email,
        subject: 'reset password',
        text: `Mail password reset link :  + ${url}`
    }
    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent', response);

        }
    });
}