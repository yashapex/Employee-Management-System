import React from 'react'
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import Footer from '../others/Footer';


const EmployeeDashboard = (props) => {
  return (
    
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={props.data} changeUser = {props.changeUser} />
        <TaskListNumbers data = {props.data} />
        <TaskList data = {props.data}/>
        <Footer/>
    </div>
  )
}

export default EmployeeDashboard;