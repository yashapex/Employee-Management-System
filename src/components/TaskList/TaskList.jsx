import React from 'react'
import AcceptTast from './AcceptTast';
import NewTast from './NewTast';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full mt-10 py-5 '>
        {data.tasks.map((element , idx) =>{

          const components = [];

            if(element.active){
              components.push(<AcceptTast key={idx} data={element}/>);
            }
            if(element.newTask){
              components.push(<NewTast key={idx} data={element}/>);
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