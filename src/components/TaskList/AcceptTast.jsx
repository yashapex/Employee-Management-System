import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AcceptTast = ({data, id}) => {

  const [userData,setUserData] =  useContext(AuthContext)

  // useEffect(() => {
  //   return null;
  // }, [userData])
  

  const taskCompleted = () =>{
    const updatedEmployees = userData.map((element) => {
      if(element.id === id){
        let hasRun = false;
        const updatedTask = element.tasks.map((task) => {
          if(!hasRun && task.active){
            hasRun = true;
            return{
              ...task,
              active:false,
              completed: true
            };
          }
          return task;
        });

        const updatedCount = {
          ...element.taskCounts,
          active: element.taskCounts.active - 1,
          completed: element.taskCounts.completed + 1
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

  const taskFailed = () =>{
    const updatedEmployees = userData.map((element) => {
      if(element.id === id){
        const updatedTask = element.tasks.map((task) => {
          if(task.active){
            return{
              ...task,
              active:false,
              failed: true
            };
          }
          return task;
        });

        const updatedCount = {
          ...element.taskCounts,
          active: element.taskCounts.active - 1,
          failed: element.taskCounts.failed + 1
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
    <div className='flex-shrink-0 h-full w-[300px] flex flex-col rounded-xl p-5 bg-red-400'>
      
        <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>

            <h2 className='font-bold text-2xl mt-5'>{data.taskTitle}</h2>

          <div className=' flex items-center grow overflow-auto'>
            <p className='text-[14px]'>{data.taskDescription}</p>
          </div>

        <div className='flex justify-between mt-4'>
            <button onClick={taskCompleted}  className='pop-in-out cursor-pointer bg-green-500 rounded py-1 px-2 text-sm'>Mark as Completed</button>
            <button onClick={taskFailed} className='pop-in-out bg-red-500 rounded py-1 px-2 text-sm'>Mark as Failed</button>

      </div>
        


    </div>

  )
}

export default AcceptTast