// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// const PurchasedCourse = () => {


//     const [courses, setCourses] = useState([])
// //   const [filter, setFilter] = useState("")
// // useEffect(() => {
// //   return async() => {
    

// // }, []})
// useEffect( () => {

//   return async() => {
//     const response = await axios.get("http://localhost:3000/user/purchasedCourses",
//         {
//           headers: {
//               Authorization: "Bearer " + localStorage.getItem("token")
//           }}
//         )
//       .then(response=>{
//             setCourses(response.data.courses)
//             console.log(response.data);
            
//       })
//   }
// }, [])



//   return (
//     <>
//     <div>
// <div className='flex flex-col items-center'>

//     <h1 className='text-center p-5 text-2xl font-bold'>Purchased Courses</h1>
//     <div className='flex flex-wrap justify-center'>
        
//         {courses.map((course) => (
//             <div key={course.id} className='flex p-0 m-5 w-full max-w-sm bg-white border border-gray-800 rounded-3xl shadow-md'>
//                 <div className="w-full">
//                     <img 
//                         src={course.avatar} 
//                         alt={`${course.Coursename} avatar`} 
//                         className='w-full h-auto rounded-t-3xl' // Changed h-2/3 to h-auto for flexible height
//                     />
//                     <h2 className="text-lg font-medium p-3">{course.Coursename}</h2>
//                     {/* Uncomment if you want to display descriptions */}
//                     <p className="course-description p-3"><span className='font-medium'>Description:</span> {course.Description}</p>
//                     <p className="p-3">Price: ${course.Price}</p>
//                     <button className='text-gray-800 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mb-3'>
//                         Enroll Now
//                     </button>
//                 </div>
//             </div>
//         ))}
//     </div>
// </div>
// </div>  
//     </>
//   )
// }

// export default PurchasedCourse


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PurchasedCourse = () => {
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         const fetchCourses = async () => {
//             const token = localStorage.getItem("token");
//             console.log(token);
//             // try {
//                 // const response = await axios.get("http://localhost:3000/user/purchasedCourses", {
//                 //     headers: {
//                 //         Authorization: "Bearer " + token,
//                 //     },
                   
//                 // });
//                  const response = await fetch("http://localhost:3000/user/purchasedCourses",{
//                         method:"GET",
//                         headers: {
//                             "content-type":"application/json",
//                             "Authorization": "Bearer " + token,
//                         }
            
//                     })
//                     .then(async(res)=>{
//                         const json = await res.json()
//                         console.log(json);
//                         setCourses(json.courses);
//                     })
//                     // const json = await res.json()
//                 //     console.log(json);
//                 // setCourses(response.data.courses);
//                 // console.log(response.data);




//             // } catch (error) {
//             //     console.error("Error fetching purchased courses: ", error);
//             // }
//         };

//         fetchCourses();
//     }, []);

//     return (
//         <div className='flex flex-col items-center'>
//             <h1 className='text-center p-5 text-2xl font-bold'>Purchased Courses</h1>
//             <div className='flex flex-wrap justify-center'>
//                 {courses.map((course) => (
//                     <div key={course.id} className='flex p-0 m-5 w-full max-w-sm bg-white border border-gray-800 rounded-3xl shadow-md'>
//                         <div className="w-full">
//                             <img 
//                                 src={course.avatar} 
//                                 alt={`${course.Coursename} avatar`} 
//                                 className='w-full h-auto rounded-t-3xl' // Changed h-2/3 to h-auto for flexible height
//                             />
//                             <h2 className="text-lg font-medium p-3">{course.Coursename}</h2>
//                             <p className="course-description p-3"><span className='font-medium'>Description:</span> {course.Description}</p>
//                             <p className="p-3">Price: ${course.Price}</p>
//                             <button className='text-gray-800 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mb-3'>
//                                 Enroll Now
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default PurchasedCourse;




import React, { useState, useEffect } from 'react';

const PurchasedCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const token = localStorage.getItem("token");
            console.log(token);

            try {
                const response = await fetch("http://localhost:3000/user/purchasedCourses", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }

                const json = await response.json();
                console.log(json);
                setCourses(json.courses);
            } catch (error) {
                console.error("Error fetching purchased courses: ", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center p-5 text-2xl font-bold'>Purchased Courses</h1>
            <div className='flex flex-wrap justify-center'>
                {courses.map((course) => (
                    <div key={course.id} className='flex p-0 m-5 w-full max-w-sm bg-white border border-gray-800 rounded-3xl shadow-md'>
                        <div className="w-full">
                            <img 
                                src={course.avatar} 
                                alt={`${course.Coursename} avatar`} 
                                className='w-full h-auto rounded-t-3xl'
                            />
                            <h2 className="text-lg font-medium p-3">{course.Coursename}</h2>
                            <p className="course-description p-3"><span className='font-medium'>Description:</span> {course.Description}</p>
                            <p className="p-3">Price: ${course.Price}</p>
                            <button className='text-gray-800 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mb-3'>
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PurchasedCourse;

