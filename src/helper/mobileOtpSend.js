const client = require("twilio")(process.env.accountSid, process.env.authToken);

exports.mobileOtp = async (number,genOtp) => {
    try {
        client.messages.create({
            body: genOtp,
            from: "+13022401005",
            to: `+91${number}`
        })
    } catch (error) {
        console.log(error);
        throw error;
    };
};