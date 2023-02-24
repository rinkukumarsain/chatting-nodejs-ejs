
const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    password:{
        type:String
    },
    otp:{
        type:Number
    },
    is_Active:{
        default:true,
        type:Boolean
    }
});

Schema.set('timestamps', true);
Schema.set('versionKey', false);
// Custom validation for email

const userModel = mongoose.model('user', Schema);
module.exports = userModel