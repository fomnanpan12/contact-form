let mongoose = require('mongoose');

// article cshema
let messageSchema = mongoose.Schema({
    name :{
        type: String,
        required: true
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required: true
    },
    website:{
        type:String,
        required: false
    },
    message:{
        type:String,
        required: true
    },
});

var Contacts = module.exports = mongoose.model('messages',messageSchema);