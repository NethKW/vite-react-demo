import React, { useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useDispatch} from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../store/todoSlice';
import TodoForm from './TodoForm'

function TodoItem({todo, index}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDelete] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  }
  const handleDelete = () => {
    setIsDelete(true);
    setTimeout(() => {
      dispatch(deleteTodo(todo.id));
    }, 200);
  }
  const handleUpdate = (text) => {
    dispatch(updateTodo({id: todo.id, updates: {text: text.trim()}}));
    setIsEditing(false);
  }



  const formatDate =(dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-Us", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }; 

  if (isEditing) {
    return <div className='p-4 bg-gray-100'>
      <TodoForm initialValue = {todo.text} OnSubmit={handleUpdate} OnCancel={() =>
        setIsEditing(false)} placeholder='Update your todo'
      />
    

    </div>
  }

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
        <button className={`'flex w-6 h-6 rounded-full border-2 items-center justify-center ' transition-all duration-200 ${
          todo.completed ? "bg-green-500 border-green-500 text-white hover:bg-green-600": 
          "border-gray-500 hover:border-green-600 hover:bg-green-50"}`}
          onClick={handleToggle}>
          {todo.completed && <CheckOutlinedIcon sx={{ fontSize: 18 }} />}
        </button>

        <div className='flex-1 min-w-0'>
          <div className='text-gray-900 leadiing-relaxed'>{todo.text}</div>
          <div className='flex-item-center gap-4 mt-2 text-xs text-gray-700'>
            <div className='flex items-center gap-3'>
              <CalendarTodayOutlinedIcon />
              <span>Created {formatDate(todo.createdAt)}</span>
            
            <span>Update {formatDate(todo.updatedAt)}</span>
          
          </div></div>
        </div>

        {/*Action Button */}
        <div className='flex items-center gap-1 opacity-40 group-hover::opacity-100'>
          <button className='p-2 text-gray-900 hover:text-gray-950 hover:bg-gray-600 rounded-lg transition-all duration-200'
          onClick={()=> setIsEditing(true)}>
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
        <button className='p-2 text-gray-900 hover:text-red-800 hover:bg-gray-600 rounded-lg transition-all duration-200 '
        onClick={handleDelete}>
          <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
