const chat = require("../model/room");
const ObjectId = require('mongodb').ObjectId;
//  user chat 
exports.insertUserChat = async (req) => {    // user ==> self
    try {
        const { roomCode, message } = req.body;
        const getUser = await chat.findOne({ "roomCode": roomCode });
        if (getUser != null) {
            await chat.findByIdAndUpdate(getUser._id, { $push: { "message": { "user": getUser._id,"message":message,"time":new Date() } } });
            return ({
                "status": 200,
                "message": "insert userChat Successfully !!"
            });
        } else {
            return ({
                "status": 400,
                "message": "invalid roomCode please Check  !!"
            });
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};

// user1 chat 
exports.insertUser1Chat = async (req) => { // user ==> other user
    try {
        console.log(req.body,"req")
        const { roomCode, message } = req.body;
        const getUser1 = await chat.findOne({ "roomCode": roomCode });
        if (getUser1 != null) {
            await chat.findByIdAndUpdate(getUser1._id, { $push: { "message": { "user": getUser1._id,
        "message":message,"time":new Date() } } });
            return ({
                "status": 200,
                "message": "insert userChat Successfully !!"
            });
        } else {
            return ({
                "status": 400,
                "message": "invalid roomCode please Check  !!"
            });
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};

// get chat 
exports.getChat = async (req) => {
    try {
        const { roomCode } = req.body;
        const getChat = await chat.find({ "roomCode": roomCode });
        if (getChat.length != 0) {
            return ({
                "status": 200,
                "message": "data fetch successfully !!",
                "chat": getChat[0].message
            });
        } else {
            return ({
                "status": 400,
                "message": "data not found !!",
                "chat": []
            });
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};

// delete message 

exports.deleteUserChat = async (req) => {
    try {
        const { _id } = req.params;
        //await chat.deleteMany({ "_id": _id })
        console.log(_id, "......>>>>>>>>>........")
        return ({
            "status": 200,
            "message": "delete All message !! "
        })
    } catch (error) {
        console.log(error);
        throw error;
    };
};
