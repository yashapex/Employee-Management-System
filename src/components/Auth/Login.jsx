import React, { useState } from 'react'
import App from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Login = ({handlelogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) =>{
        e.preventDefault()
        handlelogin(email,password)
        setEmail("");
        setPassword("");
    }

    // eye toggling feature
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () =>{
      setShowPassword(prev => !prev)
    }
    

    
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className=' h-3/4 border border-emerald-800 rounded-2xl bg-[#1c1c1c] flex flex-col'>
        <h2 className='text-3xl font-semibold m-4'>Log In</h2>
        <div className='flex-1 flex items-center justify-center p-5'>

        <form 
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center' 
        >
            
        <input 
            type="email" required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='w-80 border-1 border-emerald-600 rounded-full py-3 px-5 ' 
            placeholder='👤Email'
            autoComplete="email" 
        />
        <div className='relative'>
        <input
            type={showPassword ? "text" : "password"} 
            required
            value={password}
            autoComplete="current-password"  
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='w-80 border-1 border-emerald-600 rounded-full py-3 px-5 mt-5' 
            placeholder='🔒Password'
            
        />
        <FontAwesomeIcon 
          icon={showPassword ? faEyeSlash :faEye}
          onClick={togglePassword} 
          className=' absolute text-gray-500 right-2 top-[65%] transform -translate-y-1/2 ' />
        </div>
        <button
          className=' w-full  cursor-pointer rounded-3xl mt-5 px-5 py-2 bg-emerald-800 '
        >
        Log in
        </button>

        </form>
        
        </div>
      </div>
    </div>
  )
}

export default Login;