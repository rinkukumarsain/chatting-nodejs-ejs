const { loginUserVerify } = require('../services');

exports.loginUser = async (req, res) => {
    try {
        console.log("check ok ")
        const check = await loginUserVerify.verify(req);
        res.status(200).json(check);
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.loginPage = (req,res)=>{res.render("login")}