const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://gyani:gyani1234@cluster0.8kk8obz.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema(
    // Schema definition here
    {
        adminname: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            // required: true,
            trim: true,
            index: true
        },
        password: {
            type: String,
            requied: true
        },
        
});

const UserSchema = new mongoose.Schema(
    // Schema definition here
    {
        username: {
            type: String,
            required: true,
            // unique: true,
            // lowercase: true,
            // trim: true,
            // index: true
        },
        password: {
            type: String,
            required: true   
        },
        email: {
            type: String,
            required: true
        }
    // purchasedCourse: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Course'
    // }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    avatar:{
        type: String
    },
    Coursename : {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
}