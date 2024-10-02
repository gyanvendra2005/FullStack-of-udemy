const { User } = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.body.username 
    const existUser = User.find({
        username
    })
    if(existUser) 
    next()
    else{
        res.json({
            message:"user does not exist"
        })
    }
}

module.exports = userMiddleware;