import React, { useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function TodoItem({todo, index}) {
  const [isEditing, serIsEditing] = useState(false);
  const [isDeleting, serIsDelete] = useState(false);


  const formatDate =(dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-Us", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }; 

  return (
    <div className={`group p-4 hover:bg-gray-200 transition-all duration-200 ${
      isDeleting ? "opacity-0 transform scale-95"
      : "opacity-100 transform scale-100"
    } ${todo.completed ? "opacity-75" : ""}`}
    style={{
      animationDelay: `${index * 50}ms`,
      animation: "slideInUp 0.3s ease-out forwards"
    }}>
      {/*toggle button */}
      <div className='flex item-start gap-3'>
        <button className={`'flex w-6 h-6 rounded-full border-2 items-center justify-center ' transition-all duration-200 ${todo.completed ? "bg-green-500 border-green-500 text-white hover:bg-green-600": "border-gray-500 hover:border-green-600 hover:bg-green-50"}`}>
          <CheckOutlinedIcon sx={{ fontSize: 20 }} />
        </button>

        <div className='flex-1 min-w-0'>
          <div>{todo.text}</div>
          <div className='flex-item-center gap-4 text-gray-700'>
            <div className='flex items-center gap-1'>
              <CalendarTodayOutlinedIcon />
              <span>Created {formatDate(todo.createdAt)}</span>
            </div>
            <span>Update {formatDate(todo.updatedAt)}</span>
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
