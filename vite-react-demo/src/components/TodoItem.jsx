import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function TodoItem() {
  return (
    <div className={`group p-4 hover:bg-gray-200 transition-all duration-200`}>
      {/*toggle button */}
      <div className='flex item-start gap-3'>
        <button className='flex w-6 h-6 rounded-full border-2 items-center justify-center '>
          <CheckOutlinedIcon sx={{ fontSize: 20 }} />
        </button>

        <div className='flex-1 min-w-0'>
          <div></div>
          <div className='flex-item-center gap-4 text-gray-700'>
            <div className='flex items-center gap-1'>
              <CalendarTodayOutlinedIcon />
              <span>Created at</span>
            </div>
            <span>Update</span>
          </div>
        </div>

        {/*Action Button */}
        <div className='flex items-center gap-1 opacity-0 group-hover::opacity-100'>
          <button className='p-2 text-gray-900 hover:text-gray-950 '>
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
        <button className='p-2 text-gray-900 hover:text-red-800 '>
          <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
