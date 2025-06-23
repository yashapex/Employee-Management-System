import React, { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthProvider"

const AllTask = (props) => {

    const [userData,setUserData] =  useContext(AuthContext)
    const [newTask, setNewTask] = useState();

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <div className='bg-red-400 mb-2 px-4 py-2 flex  rounded'>
            <h3 className='w-1/5 text-center '>Employee Name</h3>
            <h3 className='w-1/5 text-center '>New Task</h3>
            <h3 className='w-1/5 text-center '>Active Task</h3>
            <h3 className='w-1/5 text-center '>Completed Task</h3>
            <h3 className='w-1/5 text-center '>Failed Task</h3>
        </div>
        {userData.map((element, idx)=>{
            const task = element.taskCounts.newTask;
            
            return(
        <div onClick   
            className=' pop-in-out border border-emerald-300 text-lg font-semibold mb-2 px-4 py-2 flex justify-between rounded '
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