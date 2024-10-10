const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, Login } = require("../db");
const { message } = require("statuses");
const bcrypt = require('bcrypt');
const JWT_SECRET = require("../config");
const jwt = require('jsonwebtoken')


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    // const haspassword = await bcrypt.hashSync(password, 10)
    const existUser = await User.findOne({
        $or: [{username},{email}]
       })
    if(!existUser){
        const user = await User.create({
            username,
            password,
            email
        })
        const userId = user._id
        try {
            const token = jwt.sign({
                userId:user._id
               },JWT_SECRET)
               res.status(200).json({
                message:"User created",
                token:token
            })
        } catch{
            res.send(400).json({
                message:"user not created"
            })
        }
       


    //     .then(() => {
    //         res.status(200).json({
    //             message:"User created succesfully"
    //         })
    //     })
    //     .catch((error) => {
    //         res.status(403).json({
    //             message:"User does not created",
    //             error:error.message
    //         })
    //     })
    }
    else{
        return res.status(404).json({
                message:"user with this username or email already exist"
               })
    }
});

// login route
router.post('/login', async (req,res)=>{
     const username= req.body.username
     const password = req.body.password
     
     const checkUserExist = User.findOne({username})
     if(!checkUserExist){
        return res.json({
            message:"Username is not found"
        })
     }
    //  const validpassword = await bcrypt.compare(password, checkUserExist.password) 
     
    //  function(err, res) {
    //     if(err) {
    //         console.log('Comparison error: ', err);
    //     }})

    //  if(!validpassword){
    //     res.json({
    //         message:"Password is not valid"
    //     })
    //  }
    //  else{
           Login.create({
            username,
            password,
           })
           .then(() => {
            res.status(200).json({
                message:"User successfully loggedIn"
                })
            })
            .catch((error) => {
            res.status(403).json({
                message:"User not login",
                error:error.message
                })
            })
     }
// }
)

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses =  await Course.find({})
    res.status(200).json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username
    
        await User.updateOne({
            username: username
        }, {
             "$push" :{
                    purchasedCourse: courseId
                } 

            
    })
 
    res.json({
        message:"purchased completed"
    })

})
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
   const user = await User.findOne({
    username: req.headers.username
   })
   const courses = await Course.find({
    _id: {
        "$in" : user.purchasedCourse
    }
   })
   res.json({
    coures: courses
   })

});
router.get('/search',async (req,res)=>{
    const filter = req.query.filter || "";

    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }},
            {
                lastname:{
                    "$regex":filter
                }
        }]
    })
    res.json({
        user: users.map(user=>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        })
        )
    })
})

module.exports = router