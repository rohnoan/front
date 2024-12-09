import React from 'react'
import { useState,useContext } from 'react'

export default function Login() {
        
    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')

    const handleSubmit=(e)=>{
        //prevent autorefresh
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            placeholder='username'
            onChange={(e)=>setUsername(e.target.value)}
            />
            {" "}
            <input type="text" 
            value={pass}
            placeholder='password'
            onChange={(e)=>setPass(e.target.value)}/>
            <button

            onClick={handleSubmit}>
                submit
            </button>
        </div>
    )
}
