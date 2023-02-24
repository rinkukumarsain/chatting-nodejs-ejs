
const mongoose = require('mongoose');
const roomSchema = mongoose.Schema;
const ObjectId = roomSchema.Types.ObjectId;
var Schema = new mongoose.Schema({
    users:{
        type:Array,
        "default": []
    },
    message: {
        type: Array,
        "default": []
    },
    roomCode:{
        type:Number
    },
    type:{
        type:String
    }
});

Schema.set('timestamps', true);
Schema.set('versionKey', false);
// Custom validation for email

const roomModel = mongoose.model('room', Schema);
module.exports = roomModel