import React from 'react'
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import Footer from '../others/Footer';

const AdminDashboard = (props) => {
  return (
    <div className='p-10 w-full h-screen '>
        <Header data = {{firstName: "Admin"}} changeUser = {props.changeUser}/>
        <CreateTask/>
        <AllTask />
        <Footer/>
    </div>
  )
}

export default AdminDashboard;