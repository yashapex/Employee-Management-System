import React from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-5 ">
      
      {/* Greeting */}
      <div className="leading-snug">
        <h1 className="text-lg sm:text-xl font-medium text-gray-300">
          Welcome back,
        </h1>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
          {props.data.firstName} 👋
        </h2>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className=" bg-red-600 
                    pop-in-out 
                    px-6 py-2 
                    rounded-full 
                    font-semibold"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
