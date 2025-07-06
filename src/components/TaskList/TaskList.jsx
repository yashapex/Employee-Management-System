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
    <div id='tasklist' className='flex flex-col 
                                  sm:flex-row sm:justify-center
                                  gap-5 w-full mt-10 py-5 
                                  /* on mobile: let page scroll vertically */
                                  h-auto overflow-visible
                                  /* on sm+: fix height and allow inner x-scroll */
                                  sm:h-auto sm:overflow-x-auto'>
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