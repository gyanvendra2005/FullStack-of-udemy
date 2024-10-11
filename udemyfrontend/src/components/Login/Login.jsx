import React,{useContext, useState} from 'react'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(userContext);
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:3000/user/login", {
                username,
                password,
            });

            // Assuming the token is in response.data.token
            localStorage.setItem("token", response.data.token);

            // Dispatch the user login action
            dispatch({ type: "USER", payload: true });
            alert("User Logged In");
            navigate("/");

        } catch (error) {
            // Handle error from Axios response
            const errorMessage = error.response?.data?.message || 'Login failed';
            console.log('Login error: ', error);
            alert('Invalid details: ' + errorMessage);
        } finally {
            // Reset form fields
            setUsername("");
            setPassword("");
        }
    };

  return (
    <div className='m-10 flex'>
      {/* <input type="text" placeholder='username' className='border-gray-800' />
      <input type="text" placeholder='password' className='border-gray-800' /> */}
     <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp" alt="" className='w-300 h-auto' width="500"/>
    
    <div className='mt-10 ml-20'>
         <h1 className='text-4xl font-bold m-10'>Log in to continue your learning journey</h1>
         <input type="text" placeholder="username" value={username} onChange={(e) =>{setUsername(e.target.value)}} className='w-200 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input> <br />

         <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input><br />
         {/* <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'></input><br /> */}

         <button onClick={login} className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300'>LogIn</button>
    </div>
</div>
  )
}

export default Login
