import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function TodoForm() {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex-1'>
        <input type="text" className='w-full px-4 py-3 bg-white backdrop-blur-sm text-gray-800 placeholder-gray-600 ' maxLength={500} />
      </div>
      <div className='flex items-center gap-2'>
        <button type='submit' className='flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-700 disabled:cursor-not-allowed text-white ' title='save todo'>
        <CheckOutlinedIcon />
        </button>
        <button type='submit' className='flex items-center justify-center w-10 h-10 bg-gray-400 hover:bg-gray-800 disabled:cursor-not-allowed text-white ' title='save todo'>
        <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default TodoForm
