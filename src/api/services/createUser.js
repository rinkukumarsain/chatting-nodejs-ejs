
const bcrypt = require("bcrypt")
const user = require("../model/user");
//const { mobileOtp  } = require('../../helper/mobileOtpSend');
const { emailOtp } = require('../../helper/emailOtpSend');

exports.create = async (req) => {
    try {
        let genOtp = (Math.floor(Math.random() * 10000) + 10000);
        const { firstName,lastname,number,email,password,is_Active } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const checkData =  await user.findOne({ $or:[{"email":email},{"number":number}] });
        if(checkData == null ){
           // mobileOtp(number,genOtp);
            emailOtp(email,genOtp);
            const insertUser = new user({
                firstName:firstName,
                lastname:lastname,
                number:number,
                email:email,
                password:hashPassword,
                otp:genOtp,
                is_Active:is_Active
            });
            const getId = await insertUser.save();
            return ({ 
                "status":200, 
                "userId":getId._id,
                "info":"mobile otp and email opt sent successfully !",
                "message":"user Create Successfully !!",
                "userData":req.body
            });
        }else{
            return ({ 
                "status":400, 
                "message":"user allready register",
                "userData":[]
            });
        };
    }
    catch (error) {
        console.log(error)
        throw error;
    };
};
