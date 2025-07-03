import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const TaskListNumbers = ({data}) => {

    const [userData,setUserData] = useContext(AuthContext);
    const employee = userData.find(emp => emp.id === data.id);

  return (
    <div>
        <div id='task-list-number' className='flex mt-10 justify-between gap-5 overflow-auto '>
            <div className='bg-blue-500 w-[45%] rounded-xl px-9 py-6 hover:bg-blue-600 '>
                <h2 className='text-3xl font-medium '>{employee.taskCounts.newTask}</h2>
                <h3 className='text-xl font-bold'>New Task</h3>
            </div>
            <div className='bg-green-500 w-[45%] overflow-clip rounded-xl px-9 py-6 hover:bg-green-600'>
                <h2 className='text-3xl font-medium '>{employee.taskCounts.completed}</h2>
                <h3 className='text-xl font-bold'>Completed Task</h3>
            </div>
            <div className='bg-yellow-500 w-[45%] rounded-xl px-9 py-6 hover:bg-yellow-600'>
                <h2 className='text-3xl font-medium '>{employee.taskCounts.active}</h2>
                <h3 className='text-xl font-bold'>Active Task</h3>
            </div>
            <div className='bg-red-500 w-[45%] rounded-xl px-9 py-6 hover:bg-red-600'>
                <h2 className='text-3xl font-medium '>{employee.taskCounts.failed}</h2>
                <h3 className='text-xl font-bold'>Failed Task</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumbers;