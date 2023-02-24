const { checkOtp,updateOtp } = require('../services/otpCheck')

exports.check = async (req, res) => {
    try {
        const { otp,id } = req.body;
        const checkOpt = await checkOtp(otp);
        if(checkOpt != null){
            await updateOtp(id)
            return res.json({
                "status":200,
                "massage":"otp is match"
            });
        }else{
            return res.json({
                "status":400,
                "massage":"invalid otp"
            });
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};