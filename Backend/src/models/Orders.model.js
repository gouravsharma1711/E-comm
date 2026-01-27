import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    products:[{
        productId:{
            type:string,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true, 
        },
        quantity:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:true,
        }
    }],
    totalAmount:{
        type:Number,
        required:true,
    },
    currentStatus:{
        type:String,
        enum:["pending","shipped","delivered","cancelled"],
        default:"pending",
    },
    paymentStatus:{
        type:String,
        enum:["pending","completed","failed"],
        default:"pending",
    },
    orderBy:{
        type:mongoose.Schema.models.ObjectId,
        ref:"User",
        required:true,
    },
    razorpay_signature:{
        type:String,
    },
    razorpayOrderId:{
        type:String,
    },
    razorpayPaymentId:{
        type:String,
    },

},    
{timestamps:true})

export const Order = mongoose.model("Order",OrderSchema);