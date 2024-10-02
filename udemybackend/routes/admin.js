const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } =  require("../db")
const { Course } = require("../db")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const adminname = req.body.adminname;
    const email = req.body.email;
    const password = req.body.password;
    const fullName = req.body.fullName;
         Admin.create({
        fullName,
        email,
        password,
        adminname,
     })
     .then(() => {
        res.json({
            message:"admin created succesfully"
        })
     })
     .catch(() =>{
        res.json({
            message:"admin not created"
        })
     })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const Coursename = req.body.Coursename;
    const price = req.body.price;
     const existedCourse =  await Course.findOne({
        Coursename
        // $or: [{} , {email}]
     })
      if(!existedCourse){
        Course.create({
            Coursename,
            price,
           })
           .then(() => {
              res.status(200).json({
                  message:"Course succesfully added"
              })
           })
           .catch(() => {
              res.status(403).json({
                  message:"Course in not added"
              })
           })
      }
      else{
        res.status(400).json({
            message: "Course already exist"
        })
      }
});
router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses =  await Course.find({})
    res.status(200).json({
        courses: courses
    })
});

module.exports = router