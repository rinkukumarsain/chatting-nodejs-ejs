const nodemailer = require('nodemailer')

exports.emailOtp = async (email,genOtp) => {
    try {
        console.log("helloe")
        const mail = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.user,
                pass: process.env.pass
            }
        });
        mail.sendMail({
            from: 'akashsahu.img@gmail.com',
            to: [email],
            subject: "otp",
            html: '<h1 >' + genOtp + '</h1>',
        });
    } catch (error) {
        console.log(error);
        throw error;
    };
};