const {Admin} = require("../db")


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const adminname = req.body.adminname;
    const password = req.body.password;
    if(adminname==="gyani" && password==="12345678"){
        next()
    }
    else{
        return res.status(403).json({
            massage:"Admin details are invalid"
        })
    }
    // Admin.findOne({
    //     adminname: adminname,
    //     password: password
    // })

}

module.exports = adminMiddleware;