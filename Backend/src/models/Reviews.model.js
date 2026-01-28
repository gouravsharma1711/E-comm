import mongoose from "mongoose"

const reviewsSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    rating:{
        enum:[1,2,3,4,5],
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    reply:[{
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        objectId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },

    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

},
{timestamps:true})

export const Review = mongoose.model("Review",reviewsSchema);