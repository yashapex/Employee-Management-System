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
        <div className=' bg-[#1c1c1c] mt-10 p-5 rounded'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2 '>
                <h3 className='text-sm !text-gray-300 mb-1 '>Task Title</h3>
                <input 
                  value={taskTitle}
                  onChange={ (e) =>{
                    setTaskTitle(e.target.value)

                }} 
                  className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='Make a UI design' 
                /> <br/>
                <h3 className='text-sm !text-gray-300 mb-1 '>Date</h3>
                <input 
                    value={taskDate}
                    onChange={ (e) =>{
                        setTaskDate(e.target.value)

                }} 
                className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="date"
              /> <br />
                <h3 className='text-sm !text-gray-300 mb-1 '>Assign to</h3>
                <input 
                  value={assignTo}
                  onChange={ (e) =>{
                    setAssignTo(e.target.value)

                }} 
                className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='employee name'
              /> <br />
                <h3 className='text-sm !text-gray-300 mb-1 '>Category</h3>
                <input
                  value={category} 
                  onChange={ (e) =>{
                    setCategory(e.target.value)

                }} 
                className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='design, dev, etc...'
              />
            </div>
                
            <div className='w-[50%] h-full'>
                <h3 className='text-sm !text-gray-300 mb-1'>Description</h3>
                <textarea
                  value={taskDescription}
                  onChange={(e) =>{
                    setTaskDescription(e.target.value)
                  }} 
                  className='border-1 border-gray-400 rounded px-3 py-1 w-full h-52 mb-5' placeholder='Add your description...'
                /><br />
                <button className='pop-in-out bg-emerald-500 rounded w-full py-2 font-semibold'>Create Task</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default CreateTask;