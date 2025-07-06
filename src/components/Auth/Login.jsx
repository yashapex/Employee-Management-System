import React, { useState } from 'react'
import App from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Bypass from './Bypass'


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
    
    <div  className='relative bg-center bg-cover m-0 flex h-screen w-full'
          style={{ backgroundImage: "url('bg2.jpg') "}}
    >

    {/* Overlay for dimming the background */}
    <div className='absolute inset-0 bg-black/60 z-0'></div>

    {/* Foreground login box */}
    <div className=" relative z-10 flex items-center justify-center h-full w-full">

        <div className="  bg-white/10 backdrop-blur-md 
                          border border-white/20 
                          h-[75%] w-[80%] max-w-2xl 
                          rounded-2xl p-10 
                          flex flex-col items-center justify-center gap-10 
                          fade-up "
        >

          {/* Heading */}
          <h2 className="text-5xl font-poppins font-bold">Log In <FontAwesomeIcon icon={faRightToBracket} className="text-4xl text-emerald-500" />
          </h2>

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
            className=' w-80 
                        border-1 border-emerald-600 rounded-full 
                        py-3 px-5
                        focus:outline-none
                        focus:border-emerald-400 
                        focus:ring-2 
                        focus:ring-emerald-300 
                        focus:shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]
                        transition-all duration-300 ' 
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
            className=' w-80 
                        border-1 border-emerald-600 rounded-full 
                        py-3 px-5 mt-5
                        focus:outline-none
                        focus:border-emerald-400 
                        focus:ring-2 
                        focus:ring-emerald-300 
                        focus:shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]
                        transition-all duration-300 ' 
            placeholder='🔐Password'
            
        />
        <FontAwesomeIcon 
          icon={showPassword ? faEyeSlash :faEye}
          onClick={togglePassword} 
          className=' absolute text-gray-500 right-2 top-[65%] transform -translate-y-1/2 ' 
        />
        </div>
        <button
          className=' w-full cursor-pointer font-medium
                      rounded-3xl 
                      mt-5 
                      px-5 py-2 
                      bg-emerald-800
                      hover:bg-emerald-600
                      active:scale-95                         
                      transition-all duration-200 
                      ease-in-out '
        >
        Log in
        </button>

        <p className="text-sm text-gray-400 mt-5">
  Need demo credentials?{" "}
  <a
    href="/demo-login"
    className="text-emerald-400 hover:underline hover:text-emerald-300 transition"
  >
    Click here
  </a>
</p>


        </form>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;