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
//     const authHeader = req.headers.authorization; 

//     if(!authHeader || !authHeader.startsWith('Bearer ')){
//         return res.status(401).json({message: 'Unauthorized'})
//     }
//     const token  = authHeader.split(' ')[1];
//     try{
//         const decoded = jwt.verify(token, JWT_SECRET);
//         if( decoded.userId){
//             req.userId = decoded.userId;
//             next();
//         }else{
//             return res.status(403).json({});
//         }
//     }
//     catch(err){
//         return res.status(403).json({});
//     }
}

module.exports = userMiddleware;