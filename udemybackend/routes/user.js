const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    User.create({
        username,
        password
    })
    .then(() => {
        res.status(200).json({
            message:"User created succesfully"
        })
    })
    .catch(() => {
        res.status(403).json({
            message:"User does not created"
        })
    })
});

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

module.exports = router