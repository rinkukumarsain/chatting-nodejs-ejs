const user = require("../model/user");
exports.checkOtp = async (otp) => {
    try {
        return checkOpt = await user.findOne({ "otp": otp });
    } catch (error) {
        console.log(error);
        throw error;
    };
};
// otp check 
exports.updateOtp = async (id) => {
    try {
        await user.findByIdAndUpdate(id, { $set: { "otp": 0 } });
    } catch (error) {
        console.log(error);
        throw error;
    };
};