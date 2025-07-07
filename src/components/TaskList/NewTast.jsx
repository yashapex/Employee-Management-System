import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTast = ({data, id}) => {

    const [userData,setUserData] = useContext(AuthContext);

    const taskAccepted = () =>{
    
        const updatedEmployees = userData.map((element) => {
        if(element.id === id){
            const updatedTask = element.tasks.map((task) => {
            if(task.id === data.id && task.newTask){
                return{
                ...task,
                newTask:false,
                active: true,
                };
                
            }
            return task;
            });

            const updatedCount = {
            ...element.taskCounts,
            newTask: element.taskCounts.newTask - 1,
            active: element.taskCounts.active + 1
            };

            return {
            ...element,
            tasks: updatedTask,
            taskCounts: updatedCount
            };

        }
        return element;
        });
        setUserData(updatedEmployees); // ✅ Update the full list
    }
  return (
    <div className='flex-shrink-0 flex flex-col
                    h-auto w-full
                    sm:h-[300px] sm:w-[300px]
                    bg-blue-600/20 border border-blue-400/30
                    backdrop-blur-lg 
                    rounded-xl shadow-lg shadow-white/5 p-5'>

        <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>

            <h2 className='font-bold text-2xl mt-5'>{data.taskTitle}</h2>

        <div className=' flex items-center grow overflow-auto pt-2 '>
            <p className='text-[14px]'>{data.taskDescription}</p>
        </div>

        <div className='mt-4'>
            <button onClick={taskAccepted} className='pop-in-out bg-sky-500 hover:bg-sky-600 rounded py-1 px-2 text-sm'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTast  