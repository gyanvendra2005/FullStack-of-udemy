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
    }
    else{
        return res.status(404).json({
                message:"user with this username or email already exist"
               })
    }
});

// login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const checkUserExist = await User.findOne({
            $or: [{ username }, { email: username }] // assuming email can be used as username
        });

        if (!checkUserExist) {
            return res.status(404).json({
                message: "Username or email not found"
            });
        }

        // Compare the password with the hashed password stored in the database
        // const validPassword = await bcrypt.compare(password, checkUserExist.password);
        
        // if (!validPassword) {
        //     return res.status(401).json({
        //         message: "Invalid password"
        //     });
        // }
        const token = jwt.sign({
            userId:checkUserExist._id
           },JWT_SECRET)
        return res.status(200).json({
            message: "User successfully logged in",
            token:token
        });

    } catch (error) {
        console.error('Login error: ', error);
        return res.status(500).json({
            message: "An error occurred during login",
            error: error.message
        });
    }
});


router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const filter = req.query.filter || "";
    const courses=await Course.find({
        $or:[{
            Coursename:{
                "$regex":filter
            }},
        ]
    })
    res.status(200).json({
        courses: courses
    })
});

// router.post('/courses/:courseId', async (req, res) => {
//     // Implement course purchase logic
//     const courseId = req.params.courseId;
//     const username = req.headers.username;
    
//         await User.updateOne({
//             username: username
//         }, {
//              "$push" :{
//                     purchasedCourse: courseId
//                 } 

            
//     })
 
//     res.json({
//         message:"purchased completed"
//     })

// })
router.post('/courses/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        // Ensure username is provided
        if (!username) {
            return res.status(400).json({ message: "Username is required" });
        }

        // Update user's purchased courses
        const result = await User.updateOne(
            { username: username },
            { $addToSet: { purchasedCourse: courseId } } // Use $addToSet to avoid duplicates
        );

        // Check if the user was found and updated
        if (result.nModified === 0) {
            return res.status(404).json({ message: "User not found or course already purchased" });
        }

        res.status(200).json({ message: "Purchase completed" });

    } catch (error) {
        console.error('Error during course purchase: ', error);
        res.status(500).json({ message: "An error occurred during purchase", error: error.message });
    }
});

router.get('/purchasedCourses',userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
   const user = await User.findOne({
    username: req.body.username
   })

     console.log(user.purchasedCourse);
     
   const courses = await Course.find({
    _id: {
        "$in" : user.purchasedCourse
    }
    // _id: user.purchasedCourse
   })
   res.json({
    courses: courses
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