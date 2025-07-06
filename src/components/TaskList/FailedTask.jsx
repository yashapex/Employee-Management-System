import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 flex flex-col
                    h-auto w-full
                    sm:h-[300px] sm:w-[300px]
                    bg-red-400/20 border border-red-400/30
                    backdrop-blur-lg 
                    rounded-xl shadow-lg shadow-white/5 p-5'>

          <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h3 className='text-sm'>{data.taskDate}</h3>
          </div>

          <h2 className='font-bold text-2xl mt-5'>{data.taskTitle}</h2>
          
          <div className=' flex items-center grow overflow-auto pt-2 '>
            <p className='text-[14px]'>{data.taskDescription}</p>
          </div>

          <div className='mt-4'>
            <button className='pop-in-out bg-red-600 rounded py-1 px-2 text-sm w-full'>Failed</button>
          </div>
        </div>
  )
}

export default FailedTask