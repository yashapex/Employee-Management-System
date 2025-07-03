import React, { useContext } from 'react'
import AcceptTast from './AcceptTast';
import NewTast from './NewTast';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({data}) => {

  const [userData,setUserData] = useContext(AuthContext);

  const employee = userData.find(emp => emp.id === data.id);

  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full mt-10 py-5 '>
        {employee.tasks.map((element , idx) =>{

          const components = [];

            if(element.active){
              components.push(<AcceptTast key={idx} data={element} id={data.id}/>);
            }
            if(element.newTask){
              components.push(<NewTast key={idx} data={element} id={data.id}/>);
            }
            if(element.completed){
              components.push(<CompleteTask key={idx} data={element}/>);
            }
            if(element.failed){
              components.push(<FailedTask key={idx} data={element}/>);
            }

            return components
        })}
       
    </div>
  )
}

export default TaskList;