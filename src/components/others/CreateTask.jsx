import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')


  const submitHandler = (e) =>{
    e.preventDefault()

    const newTask = ({taskTitle, taskDescription,taskDate, category, active:false, newTask:true, failed:false, completed:false})

    const updatedData = userData.map((elem) =>{
      if(assignTo === elem.firstName){
        return{
          ...elem,
          tasks:[...elem.tasks,newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        };
      }
      return elem;
    });

    setUserData(updatedData)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

  }


  return (
    <div>
        <div className=' bg-white/10 backdrop-blur-lg shadow-lg mt-10 p-5 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
                className='flex flex-wrap gap-5 '
            >
                <div className=' sm:w-[48%] w-full space-y-4'>
                <label className='text-sm !text-gray-300 mb-1 '>Task Title</label>
                <input 
                  value={taskTitle}
                  onChange={ (e) =>{
                    setTaskTitle(e.target.value)

                }} 
                  className='border-1 border-gray-400 rounded px-3 py-1 w-full mb-5' type="text" placeholder='Make a UI design' 
                /> <br/>

                <label className='text-sm !text-gray-300 mb-1 '>Date</label>
                <input 
                    value={taskDate}
                    onChange={ (e) =>{
                        setTaskDate(e.target.value)

                }} 
                className='border-1 border-gray-400 rounded px-3 py-1 w-full mb-5' type="date"
                /> <br />

                <label className='text-sm !text-gray-300 mb-1 '>Assign to</label>
                <select 
                  value={assignTo}
                  onChange={ (e) =>{
                    setAssignTo(e.target.value)

                }} 
                className=' border-1 border-gray-400 
                            rounded px-3 py-1 w-full mb-5' type="text" placeholder='employee name'
                >
                <option className='bg-[#1c1c1c]'
                        value="" disabled
                >
                  Select an employee
                </option>

                {userData.map((user, index) => (
                <option className='bg-[#1c1c1c]'
                        key={index} 
                        value={user.firstName}>
                  {user.firstName}
                </option>
                ))}
                </select>
                 <br />
                <label className='text-sm !text-gray-300 mb-1 '>Category</label>
                <input
                  value={category} 
                  onChange={ (e) =>{
                    setCategory(e.target.value)

                }} 
                className='border-1 border-gray-400 rounded px-3 py-1 w-full mb-5' type="text" placeholder='design, dev, etc...'
              />
            </div>
                
            <div className='sm:w-[48%] w-full h-full'>
                <label className='text-sm !text-gray-300 mb-1'>Description</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) =>{
                    setTaskDescription(e.target.value)
                  }} 
                  className='border-1 border-gray-400 rounded px-3 py-1 w-full h-52 mb-5' placeholder='Add your description...'
                /><br />
                <button className='pop-in-out bg-emerald-500 rounded w-full py-2 font-semibold'>➕ Create Task</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default CreateTask;