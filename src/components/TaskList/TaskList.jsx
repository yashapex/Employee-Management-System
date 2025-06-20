import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full mt-10 py-5 '>
        
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-red-400'>
          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h4>
            <h3 classname='text-sm'>20 feb 2024 </h3>
          </div>
          <h2 className='font-bold text-2xl mt-5'>Complete your React</h2>
          <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, perferendis harum! Quasi, ex sapiente.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-green-400'>
          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h4>
            <h3 classname='text-sm'>20 feb 2024 </h3>
          </div>
          <h2 className='font-bold text-2xl mt-5'>Complete your React</h2>
          <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, perferendis harum! Quasi, ex sapiente.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-blue-400'>
          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h4>
            <h3 classname='text-sm'>20 feb 2024 </h3>
          </div>
          <h2 className='font-bold text-2xl mt-5'>Complete your React</h2>
          <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, perferendis harum! Quasi, ex sapiente.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-yellow-400'>
          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h4>
            <h3 classname='text-sm'>20 feb 2024 </h3>
          </div>
          <h2 className='font-bold text-2xl mt-5'>Complete your React</h2>
          <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, perferendis harum! Quasi, ex sapiente.</p>
        </div>
       
    </div>
  )
}

export default TaskList;