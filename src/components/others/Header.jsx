import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello<br /> <span className='text-3xl font-bold'>Yash Gupta 👋</span></h1>
        <button className='font-bold cursor-pointer bg-red-600 text-white px-6 py-2 rounded-md'>Log out</button>
    </div>
  )
}

export default Header