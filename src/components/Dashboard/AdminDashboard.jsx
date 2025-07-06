import React from 'react'
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import Footer from '../others/Footer';

const AdminDashboard = (props) => {
  return (
    <div className=" fade-up relative w-full min-h-screen">
      
      {/* Background image with cover */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url('bg2.jpg')" }}
      >
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 p-5">
        
        <Header data={{ firstName: "Admin" }} changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
        <div className="-m-5">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default AdminDashboard;
