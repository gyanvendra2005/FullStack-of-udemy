import React ,{useState,useEffect} from 'react'
import Card from '../Card/Card'


const ViewCourse = () => {
  const [courses, setCourses] = useState([])

useEffect(() => {
  return () => {
    fetch("http://localhost:3000/user/courses")
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
}, [])
  return (
    <>
     <Card courses={courses}/> 
    </>
  )
}

export default ViewCourse
