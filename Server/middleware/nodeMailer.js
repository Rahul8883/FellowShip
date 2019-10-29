const nodeMailer = require('nodemailer');
exports.sendMail = (email, url) => {
    // console.log("email in node mailer", process.env.name,process.env.password);
    console.log("url in node mailer", url);
    var smtpTransport = nodeMailer.createTransport({
        service: 'gmail', // sets automatically host, port and connection security settings
        auth: {
            user: process.env.name,
            pass: process.env.password
        }


    });
    console.log("dsfsdfsfdsf", smtpTransport.auth);
    var mailOptions = {
        from: process.env.name,
        to: process.env.name,
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