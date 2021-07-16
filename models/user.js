const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required : [true, 'first name is required']
    },
    lastname: {
        type: String,
        required : [true, 'last name is required']
    },
    email:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required: true
    },
    url:{
        type:String,
        required: false
    },
    message:{
        type:String,
        required: true
    },
});

const UserModel = module.exports = mongoose.model('user', userSchema);

