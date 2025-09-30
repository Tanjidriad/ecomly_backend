const nodemailer = require('nodemailer');

exports.sendMail = async (email, subject, body, htmlBody = null) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Ecomly Support" <${process.env.EMAIL}>`,
      to: email,
      subject: subject,
      text: body,
    };

    // Add HTML version if provided
    if (htmlBody) {
      mailOptions.html = htmlBody;
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(Error('Error sending email'));
      }
      console.log('Email sent:', info.response);
      resolve('Password reset OTP sent to your email');
    });
  });
};
