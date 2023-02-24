const jwt = require("jsonwebtoken");
const { room:{ insertRoom } } = require('../services');

exports.createRoom = async(req,res)=>{
    try {
        const token = req.headers.authorization.split(" ").pop();
        const getUser = jwt.verify(token, process.env.SECRT_KEY);
        const getRes = await insertRoom(req,getUser);
        res.status(200).json(getRes);
    } catch (error) {
        console.log(error);
        throw error;
    };
};