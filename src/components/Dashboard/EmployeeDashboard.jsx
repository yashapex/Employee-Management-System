import React from 'react'
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import Footer from '../others/Footer';


const EmployeeDashboard = (props) => {
  return (
    <div className=" fade-up relative w-full">

    {/* Background + dim overlay */}
    <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/40" />
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col w-full h-full">

        <Header data={props.data} changeUser = {props.changeUser} />
        
        <main className="flex-grow p-2">
          <TaskListNumbers data = {props.data} />
          <TaskList data = {props.data}/>
        </main>
        
          <Footer />
          </div>
          
    </div>
  )
}

export default EmployeeDashboard;