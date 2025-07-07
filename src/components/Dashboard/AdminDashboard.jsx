import React from 'react'
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import Footer from '../others/Footer';

const AdminDashboard = (props) => {
  return (
    <div className=" fade-up relative w-full min-h-screen">
      
      {/* Background + dim overlay */}
    <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="relative z-10">
        
        <Header data={{ firstName: "Admin" }} changeUser={props.changeUser} />
        <main className='p-2'>
          <CreateTask />
          <AllTask />
        </main>
          <Footer />
      </div>
    </div>
  )
}

export default AdminDashboard;