import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello<br /> <span className='text-3xl font-bold'>{props.data.firstName} 👋</span></h1>
        <button onClick={logOutUser}
            className='pop-in-out font-bold cursor-pointer bg-red-600 text-white px-6 py-2 rounded-md'>Log out</button>
    </div>
  )
}

export default Header