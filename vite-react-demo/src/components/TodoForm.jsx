import React, { useState, useRef } from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch } from 'react-redux';
import { setIsAddingTodo } from '../store/todoSlice';
import { addTodo } from '../store/todoSlice';



function TodoForm({
  OnSubmit,
  OnCancel,
  initialValue = "",
  placeholder = "Add a new todo",
}) {

  const dispatch = useDispatch(initialValue);
  const [text, setText] = useState(initialValue);
  const inputRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const trimmedText = text.trim()

    if (trimmedText){
      if(OnSubmit){
        OnSubmit(trimmedText)
      }else{
        dispatch(addTodo(trimmedText))
      }
      setText("")
    }

  }

  const handleCancle = () => {
    if (OnCancel){
      OnCancel();
    }else{
      dispatch(setIsAddingTodo(false));
    }
    setText("");
  }

  
  return (
    <form className='flex items-center gap-3' onSubmit={handleSubmit}>
      <div className='flex-1'>
        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}
        placeholder={placeholder} type="text" className='w-full px-4 py-3 bg-white backdrop-blur-sm text-gray-800 placeholder-gray-600 ' maxLength={500} />
      </div>
      <div className='flex items-center gap-2'>
        <button type='submit' className='flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-700 disabled:cursor-not-allowed text-white ' title='save todo'>
        <CheckOutlinedIcon />
        </button>
        <button type='button' className='flex items-center justify-center w-10 h-10 bg-gray-400 hover:bg-gray-800 disabled:cursor-not-allowed text-white ' title='save todo'
        onClick={handleCancle}>
        <CloseOutlinedIcon />
        </button>
      </div>
    </form>
  )
}

export default TodoForm
