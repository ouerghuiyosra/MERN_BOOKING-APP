const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
         required: true,
         minLenght:[6]
        },
    firstName:{
        type: String,
         required: true
        },
    lastName:{
        type: String,
        required: true
            },
    profilePhoto:{
        type: String,
                },
    role:{
        type: String,
        defult:"user",
        required: true
         },
    adresse:{
        type:String,
        required:function (){
            return this.role === "host";
        }
    },
    phone:{
        type:Number,
    },
    data:{
        type: Date,
        default:Date.now,
    }

   


})
const User = mongoose.model('user',UserSchema)
module.exports= User ;
