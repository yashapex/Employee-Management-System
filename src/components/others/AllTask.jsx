import React, { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthProvider"

const AllTask = (props) => {

    const [userData,setUserData] =  useContext(AuthContext)
    
  return (
    <div className='p-5
                    bg-blue-400/10 border border-blue-800/30 backdrop-blur-lg
                    mt-5 
                    rounded'
    >
        <div className='bg-emerald-600/20 
                        text-[10px] sm:text-sm font-semibold 
                        mb-2 px-2 py-4 
                        border border-emerald-400
                        flex items-start justify-center
                        rounded'
        >
            <h3 className='w-1/5 text-center mr-0.5 '>Employee 👤</h3>
            <h3 className='w-1/5 text-center mr-0.5'> New Task 🆕</h3>
            <h3 className='w-1/5 text-center mr-0.5'>Active ⚙️ </h3>
            <h3 className='w-1/5 text-center mr-0.5'>Completed ✅</h3>
            <h3 className='w-1/5 text-center'>Failed ❌ </h3>
        </div>
        {userData.map((element, idx)=>{
            const task = element.taskCounts.newTask;
            
            return(
        <div   
            className=' pop-in-out 
                        bg-gradient-to-r from-[#1e293b] to-[#0f172a]
                         
                        sm:text-lg font-semibold 
                        mb-2 px-4 py-2 
                        flex justify-between 
                        rounded '
            key={idx}>
            <h3 className=' w-1/5 text-center ' >{element.firstName}</h3>
            <h3 className='w-1/5 text-center text-blue-500' >{element.taskCounts.newTask}</h3>
            <h3 className='w-1/5 text-center text-amber-300'>{element.taskCounts.active}</h3>
            <h3 className='w-1/5 text-center text-green-500'>{element.taskCounts.completed}</h3>
            <h3 className='w-1/5 text-center text-rose-500' >{element.taskCounts.failed}</h3>
        </div>)
        })}
        

    </div>
  )
}

export default AllTask;