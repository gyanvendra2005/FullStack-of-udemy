import React from 'react'

export default function Card({courses}) {
    return (
        // <>
        <div className='flex'>
            {courses.map((course)=>{
                return (
                    <div className='flex p-10'>
                           <div className="">
                               <img src={course.avatar} alt="avatar" className='flex' width="200" height="30"/>
                               <h1 className="course-title">{course.Coursename}</h1>
                                {/* <p className="course-description">{course.description}</p> */}
                                <p className="course-instructor">Price: {course.price}</p>
                               <button className="enroll-button">Enroll Now</button>
                          </div>
                    </div>
                )
            })}
        </div>
        // </>
    )
}