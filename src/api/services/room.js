const room = require("../model/room");
const ObjectId = require('mongodb').ObjectId;
exports.insertRoom = async (req, getUser) => {
    try {
        const { user1, type } = req.body;
        const checkuser1 = await room.findOne({ "users": { "$in": [ ObjectId(user1) ] } })
        if (checkuser1 == null) {
            const roomCode = (Math.floor(Math.random() * 10000000000) + 1000000000);
            const insertUsersId = await new room({
                users: [ObjectId(getUser._id), ObjectId(user1)],
                roomCode: roomCode,
                type: type
            });
            insertUsersId.save();
            return ({
                "status": 200,
                "roomCode": roomCode,
                "massage": "create room successfully !! "
            });
        } else {
            return ({
                "status": 400,
                "massage": "this user1 room allready created!! "
            });
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};