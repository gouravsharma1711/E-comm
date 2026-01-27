import ApiResponse from "./ApiResponse.js";

const asyncHandler =(requestHandler)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((error)=>{
            res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode,error.message,null))
        })
    }
}
export default asyncHandler;