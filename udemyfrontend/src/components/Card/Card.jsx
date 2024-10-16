import axios from 'axios'
import React,{useState, useEffect} from 'react'

export default function Card() {

//  const[filter, setFilter ] = useState("")   
const [courses, setCourses] = useState([])
  const [filter, setFilter] = useState("")
useEffect(() => {
  return () => {
    fetch("http://localhost:3000/user/courses?filter="+filter)
    .then(async (res)=>{
      const json = await res.json();
      setCourses(json.courses)
      console.log('working');
      
    })
    .catch(()=>{
      console.log('not working');
    }
    )
  }
}, [filter])

    return (
  <div>
    <input type="text" placeholder='Search User...' value={filter} onChange={(e)=>setFilter(e.target.value)} className='w-80 border mt-3 px-3 py-2 rounded focus:outline-none focus:ring-1 ring-primary-lighter' 
    />    
<div className='flex flex-col items-center'>

    <h1 className='text-center p-5 text-2xl font-bold'>Courses</h1>
    <div className='flex flex-wrap justify-center'>
        
        {courses.map((course) => (
            <div key={course.id} className='flex p-0 m-5 w-full max-w-sm bg-white border border-gray-800 rounded-3xl shadow-md'>
                <div className="w-full">
                    <img 
                        src={course.avatar} 
                        alt={`${course.Coursename} avatar`} 
                        className='w-full h-auto rounded-t-3xl' // Changed h-2/3 to h-auto for flexible height
                    />
                    <h2 className="text-lg font-medium p-3">{course.Coursename}</h2>
                    {/* Uncomment if you want to display descriptions */}
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
</div>  

        // </>
    )
}