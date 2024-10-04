import React, { useState } from 'react'

const SignUp = () => {
      const [username , setUsername] = useState("")
      const [password, setPassword] = useState("")
      const [email, setEmail] = useState("")

    const add = () => {
        fetch("http://localhost:3000/user/signup",{
            method:"POST",
            body: JSON.stringify({
                username:username,
                password:password,
                email:email
            }),
            headers: {
                "content-type":"application/json"
            }
        })
        .then(async (res)=>{
            const json = await res.json()
            console.log(json);
            
            alert("User created") 
        })
        setEmail("")
        setPassword("")
        setUsername("")
    }

  return (
    <div>
      {/* <input type="text" placeholder='username' className='border-gray-800' />
      <input type="text" placeholder='password' className='border-gray-800' /> */}


<input type="text" placeholder="username" value={username} onChange={(e) =>{setUsername(e.target.value)}}></input> <br />

<input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br />
<input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br />

<button onClick={add}>Add todo</button>
    </div>
  )
}

export default SignUp
