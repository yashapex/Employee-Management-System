import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className=' bg-[#1c1c1c] mt-10 p-5 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2 '>
                <h3 className='text-sm !text-gray-300 mb-1 '>Task Title</h3>
                <input className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='Make a UI design' /> <br />
                <h3 className='text-sm !text-gray-300 mb-1 '>Date</h3>
                <input className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="date"/> <br />
                <h3 className='text-sm !text-gray-300 mb-1 '>Assign to</h3>
                <input className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='employee name'/> <br />
                <h3 className='text-sm !text-gray-300 mb-1 '>Category</h3>
                <input className='border-1 border-gray-400 rounded px-3 py-1 w-5/6 mb-5' type="text" placeholder='design, dev, etc...'/>
            </div>
                
            <div className='w-[50%] h-full'>
                <h3 className='text-sm !text-gray-300 mb-1'>Description</h3>
                <textarea className='border-1 border-gray-400 rounded px-3 py-1 w-full h-52 mb-5' placeholder='Add your description...'/><br />
                <button className='bg-emerald-500 rounded w-full py-1 font-semibold'>Create Task</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default CreateTask;