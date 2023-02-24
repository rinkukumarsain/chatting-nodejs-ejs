const user = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const { mobileOtp } = require('../../helper/mobileOtpSend');
const { emailOtp } = require('../../helper/emailOtpSend');

exports.verify = async (req) => {
    try {
        console.log(req.body,"data")
        let genOtp = (Math.floor(Math.random() * 10000) + 10000);
        const { type, email, number,password } = req.body;
        if (type == "email") {
            const checkData = await user.findOne({ "email": email });
            if (checkData != null) {
            const passwordVerfied = bcrypt.compareSync(password,  checkData.password);
            if(passwordVerfied == true){
                emailOtp(email, genOtp);
                const token = await jwt.sign({ _id: checkData._id }, process.env.SECRT_KEY);
                await user.findByIdAndUpdate(checkData._id, { $set: { "otp": genOtp } });
                res.cookie("chat", token, {expires: new Date(Date.now() + 60000 * 60 * 6), httpOnly: true })
                return ({
                    "status": 200,
                    "userId": checkData._id,
                    "token":token,
                    "info": "mobile otp and email opt sent successfully !",
                    "message": "user Create Successfully !!",
                });
            }
            } else {
                return ({
                    "status": 400,
                    "message": "user data not found !!",
                });
            };
        } else if (type == "number") {
            const checkData = await user.findOne({ "number": number });
            if(checkData != null){
                const passwordVerfied = bcrypt.compareSync(password,  checkData.password);
                if(passwordVerfied == true){
           // mobileOtp(number, genOtp);
            const token = await jwt.sign({ _id: checkData._id }, process.env.SECRT_KEY);
            await user.findByIdAndUpdate(checkData._id, { $set: { "otp": genOtp } });
            return ({
                "status": 200,
                "userId": checkData._id,
                "token":token,
                "info": "mobile otp and email opt sent successfully !",
                "message": "user Create Successfully !!",
            });
        };
        }else{
            return ({
                "status": 400,
                "message": "user data not found !!",
            });
        };
        };
    }
    catch (error) {
        console.log(error)
        throw error;
    };
};
