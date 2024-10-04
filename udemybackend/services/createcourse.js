const { message } = require("statuses");
const uploadResult =require('./cloudnary')
const { Course } = require("../db");
const upload = require("../middleware/multer.middleware");
const multer = require('multer')
const createcourse = async (req,res)=>{
    // const avatar = req.body.avatar;
    const Coursename = req.body.Coursename;
    const Price = req.body.Price;
    const Description = req.body.Description
    console.log(req.file);
    const avatarlocalpath = req.file.path

    if(!avatarlocalpath){
        res.status(400).json({
           message: "avatar is not found at avatarlocalpath"
        })
    }
     const avatar = await uploadResult(avatarlocalpath)
     if(!avatar){
        res.status(400).json({
            message:"avatar not uploded"
        })
     }
     

    const existedCourse =  await Course.findOne({
        Coursename
        // $or: [{} , {email}]
     })
      if(!existedCourse){
        Course.create({
            avatar:avatar.url,
            Coursename,
            Price,
            Description
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

}

module.exports = createcourse