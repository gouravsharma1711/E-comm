import mongoose from "mongoose"

const sizeSchema = new mongoose.Schema({
    size:{
        type:String,
    },
    widthInInches:{
        type:Number,
    },
    lengthInInches:{
        type:Number,
    },
    sleeveInInches:{
        type:Number,
    },
    weight:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
},
{timestamps: true})
export const Size = mongoose.model("Size",sizeSchema);