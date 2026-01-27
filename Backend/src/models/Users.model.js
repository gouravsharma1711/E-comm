import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        lowercase:true,
    },
    lastName:{
        type:String,
        lowercase:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        Enum:["male","female","other"],
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:true,
    },
    avatar:{
        type:String,
        default:"",
    },
    country:{
        type:String,
        lowercase:true,
    },
    refreshToken:{
        type:String,

    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordExpiry:{
        type:Date,
    }
},
    {timestamps:true}
);

export const User = mongoose.model("User",userSchema);