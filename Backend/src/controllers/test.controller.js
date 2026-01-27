import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js"

const test=asyncHandler(async(req,res)=>{
    let error=true;
    if(error){
        throw new ApiError(400,"mere maan tha isliya error dia testing purpose k lia ")
    }

    res.status(200).json({
        success:true,
        data:"Testing"
    })
})

export {test}