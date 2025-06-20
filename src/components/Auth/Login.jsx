import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) =>{
        e.preventDefault();

        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className=' h-3/4 border border-emerald-800 bg-[#1c1c1c] flex flex-col'>
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
        />
        <input 
            type="password" required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=' w-80 border-1 border-emerald-600 rounded-full py-3 px-5 mt-5' 
            placeholder='🔒Password'
        />
        <button 
            className=' w-full  cursor-pointer rounded-3xl mt-5 px-5 py-2 bg-red-600 '
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