import React from 'react'

export default function Card({courses}) {
    return (
        // <>
        // <div className='flex'>
        //     <span className='items-center text-center'><h1>Courses</h1></span>
        //     {courses.map((course)=>{
        //         return (
        //             <div className='flex p-0 m-10 w-full  bg-white border border-gray-800 rounded-3xl shadow-md'>
        //                    <div className="w-full">
        //                        <img src={course.avatar} alt="avatar" className='w-full rounded-t-3xl'/>
        //                        <h1 className="course-title">{course.Coursename}</h1>
        //                         {/* <p className="course-description">{course.description}</p> */}
        //                         <p className="course-instructor">Price: {course.price}</p>
        //                        <button className="enroll-button">Enroll Now</button>
        //                   </div>
        //             </div>
        //         )
        //     })}
        // </div>
        <div className='flex flex-col items-center'>
    <h1 className='text-center p-10'>Courses</h1>
    <div className='flex flex-wrap justify-center'>
        {courses.map((course) => (
            <div key={course.id} className='flex p-0 m-10 w-full max-w-sm bg-white border border-gray-800 rounded-3xl shadow-md'>
                <div className="w-full ">
                    <img src={course.avatar} alt={`${course.Coursename} avatar`} className='w-full h-2/3 rounded-t-3xl' />
                    <h2 className="course-title">{course.Coursename}</h2>
                    {/* <p className="course-description">{course.description}</p> */}
                    <p className="">Price: {course.price}</p>
                    <button className='text-gray-800 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Enroll Now</button>
                </div>
            </div>
        ))}
    </div>
</div>

        // </>
    )
}