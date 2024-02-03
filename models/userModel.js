const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, 'please enter the name']
        },
        email:{
            type: String,
            unique:true
        },
        password:{
            type:String
        }
    },
    {
        timeStamp:true,
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;