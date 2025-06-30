import React from 'react'

const NewTast = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] flex flex-col rounded-xl p-5 bg-green-400'>

        <div className='flex justify-between items-center'>
            <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>

            <h2 className='font-bold text-2xl mt-5'>{data.taskTitle}</h2>

        <div className=' flex items-center grow overflow-auto pt-2 '>
            <p className='text-[14px]'>{data.taskDescription}</p>
        </div>

        <div className='mt-4'>
            <button className='pop-in-out bg-red-400 rounded py-1 px-2 text-sm'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTast  