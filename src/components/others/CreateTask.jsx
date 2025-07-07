import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  const [justCreated, setJustCreated] = useState(false);

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
          tasks:[newTask, ...elem.tasks],
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
        <div className=' bg-blue-400/10 border-2 border-gray-600/30 backdrop-blur-lg mt-10 p-5 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e);

              setJustCreated(true);
              setTimeout(() => setJustCreated(false), 3000);
            }}
                className='flex flex-wrap gap-5 '
            >

                <div className=' sm:w-[48%] w-full space-y-4'>
                <label className='text-sm mb-1 '>Task Title</label>
                <input
                  value={taskTitle}
                  onChange={ (e) =>{
                    setTaskTitle(e.target.value)
                  }} 
                  className='bg-black/10 
                              border border-blue-400/20
                              backdrop-blur-sm
                              placeholder:text-gray-400
                              rounded px-3 py-2 
                              w-full 
                              focus:outline-none focus:ring-2 focus:ring-blue-300
                              transition-all duration-200'
                  type="text" placeholder='🛠️ Build dashboard UI' 
                /> <br/>


                <label className='text-sm mb-1 '>Date</label>
                <input 
                    value={taskDate}
                    onChange={ (e) =>{
                        setTaskDate(e.target.value)
                }} 
                className=' bg-black/10 
                            border border-blue-400/20
                            backdrop-blur-sm
                            rounded px-3 py-2 
                            w-full 
                            focus:outline-none focus:ring-2 focus:ring-blue-300
                            transition-all duration-200'
                type="date"
                /> <br />


                <label className='text-sm mb-1 '>Assign to</label>
                <select required
                  value={assignTo}
                  onChange={ (e) =>{
                    setAssignTo(e.target.value)

                }} 
                className=' bg-black/10 
                            border border-blue-400/20
                            backdrop-blur-sm
                            rounded px-3 py-2 
                            w-full 
                            focus:outline-none focus:ring-2 focus:ring-blue-300
                            transition-all duration-200'
                >
                <option className='bg-[#1c1c1c]'
                        value="" disabled
                >
                  🧑‍💼 Choose a team member
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


                <label className='text-sm mb-1 '>Category</label>
                <input
                  value={category} 
                  onChange={ (e) =>{
                    setCategory(e.target.value)

                }} 
                className=' bg-black/10 
                            border border-blue-400/20
                            backdrop-blur-sm
                            rounded px-3 py-2 
                            w-full 
                            focus:outline-none focus:ring-2 focus:ring-blue-300
                            transition-all duration-200'
                type="text" 
                placeholder='🎨design, 💻dev, etc...'
              />
            </div>
                
            <div className='sm:w-[48%] w-full h-full'>
                <label className='text-sm mb-1'>Description</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) =>{
                    setTaskDescription(e.target.value)
                  }} 

                  className=' bg-black/10 
                            border border-blue-400/20
                            backdrop-blur-sm
                            rounded px-3 py-2 
                            w-full h-59 mb-1
                            focus:outline-none focus:ring-2 focus:ring-blue-300
                            transition-all duration-200' 
                  placeholder='💬 Briefly explain the task'/>
                  <br />
                <button className=' pop-in-out 
                                    bg-emerald-500 
                                    rounded 
                                    w-full py-2 
                                    font-semibold'>
                  {justCreated ? '✅ Task created' : '➕ Create Task'}
                </button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default CreateTask;