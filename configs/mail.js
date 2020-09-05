const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'giakhanh9890@gmail.com',
        pass: '18199800aA'
    }, tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter;