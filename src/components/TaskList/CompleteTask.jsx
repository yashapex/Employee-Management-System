import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 flex flex-col
                    h-auto w-full
                    sm:h-[300px] sm:w-[300px]
                    bg-green-500/20 border border-green-400/30
                    backdrop-blur-lg 
                    rounded-xl shadow-lg shadow-white/5 p-5'>

        <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h3 className='text-sm'>{data.taskDate} </h3>
        </div>

          <h2 className='font-bold text-2xl mt-5'>{data.taskTitle}</h2>

          <div className=' flex items-center grow overflow-auto pt-2 '>
            <p className='text-[14px]'>{data.taskDescription}</p>
          </div>
          
          <div className='mt-4'>
            <button className='pop-in-out bg-green-500 rounded py-1 px-2 text-sm w-full'>Completed</button>
          </div>
    </div>

  )
}

export default CompleteTask