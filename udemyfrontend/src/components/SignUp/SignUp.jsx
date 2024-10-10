import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
      const [username , setUsername] = useState("")
      const [password, setPassword] = useState("")
      const [email, setEmail] = useState("")
      const navigate = useNavigate()

    const add = async() => {
        // fetch("http://localhost:3000/user/signup",{
        //     method:"POST",
        //     body: JSON.stringify({
        //         username:username,
        //         password:password,
        //         email:email
        //     }),
        //     headers: {
        //         "content-type":"application/json"
        //     }

        // })
        const response = await axios.post("http://localhost:3000/user/signup",{
                username:username,
                password:password,
                email:email
        })
        console.log(response.data);
        localStorage.setItem("token",response.data.token)
        navigate("/")
        // .then(async (res)=>{
        //     const json = await res.json()
        //     console.log(json);
            
        //     alert("User created") 
        // })

        setEmail("") 
        setPassword("")
        setUsername("")

    }

  return (
    <div className='m-10 flex'>
      {/* <input type="text" placeholder='username' className='border-gray-800' />
      <input type="text" placeholder='password' className='border-gray-800' /> */}
     <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp" alt="" className='w-300 h-auto' width="500"/>
    
    <div className='mt-20 ml-20'>
         <h1 className='text-4xl font-bold m-10'>Sign up and start learning</h1>
         <input type="text" placeholder="username" value={username} onChange={(e) =>{setUsername(e.target.value)}} className='w-200 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input> <br />

         <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input><br />
         <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input><br />

         <button onClick={add} className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300'>Sign Up</button>
    </div>
</div>


)}

export default SignUp