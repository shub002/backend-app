// approach using promises

const asyncHandler = (requestHandler) => {
    (res, req, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next (err))
    }
}







export {asyncHandler}



// approach using async/await

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }