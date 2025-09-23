import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

function TodoApp() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 py-8 px-4'>
      <div className='max-w-2xl mx-auto'>
        {/*header*/}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-b0ld text-blue-500 mb-2'>Task-Tracker</h1>
          <p>Simplify your day, one step at a time</p>
        </div>

        {/*Stats Card*/}
        <div className='bg-white backdrop-blur-sm rounded-2xl p-6 mb6 border border-gray-400 shadow-lg'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-lg font-semibold text-gray-500'>
              Progress Overview
            </h2>
            <div className='text-2xl font-bold text-green-500'>
            {/* Stats Completed logics*/}
            
          </div>
          </div>

          <div className='w-full bg-gray-300 rounded-full h-3 mb-4'>
            {/*Prgressbar */}
            <div className='bg-gradient-to-b from-green-500 to-green-600 h-3 rounded-full transition-all duration-400 ease-out'></div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Total logic */}
              </div>
              <div className='text-sm text-gray-800'>Total</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Active logic */}
              </div>
              <div className='text-sm text-gray-800'>Active</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Completed logic */}
              </div>
              <div className='text-sm text-gray-800'>Completed</div>
            </div>

          </div>
        </div>
        {/* Main Todo */}
        <div className='bg-white backdrop-blur-md mt-4 rounded-2xl border border-gray-300 shadow-lg overflow-hidden'>
          {/* Action bar */}
          <div className='p-6 border-b border-gray-300'>
            <div className='flex items-center justify-between mb-4'>
              <button className='flex item-center gap-3 bg-blue-400 hover:bg-blue-500 hover:text-black text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer font medium'>
                <AddIcon />Add
              </button>
              {/* Clear and delete button */}
              <div className='flex item-center gap-3'>
                <button className='flex item-center gap-3 text-red-400 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50'>
                <ClearIcon />Clear Completed
              </button>

              <div className='flex item-center gap-3'>
                <button className='flex item-center gap-3 text-green-400 hover:text-green-700 px-3 py-2 rounded-lg hover:bg-red-50'>
                <CheckIcon />Mark All Completed
              </button>
              </div>
            </div>
            
          </div>
          {/*Todo filter */}
            <TodoFilter />
            
        </div>
        {/* todo form */}
        <div className='p-6 border-b border-gray-300 bg-gray-100'>
          <TodoForm />
        </div>
        {/* todo list */}
        <div className='max-h-96 overflow-y-auto'>
          <div className='p-12 text-center'>
            <div className='text-black-300'>
              <PanoramaFishEyeIcon sx={{ fontSize: 28 }} className='mx-auto mb-4 opacity-50' />
              <p className='text-lg font-medium'>No Todos yet</p>
              <p>Add your 1st todo to get started.</p>
            </div>

            {/* Conditional radering */}
            <div>
              <FilterAltOutlinedIcon sx={{ fontSize: 58 }} className='mx-auto mb-4 opacity-50'/>
              <p>No Filter  TOdos</p>
              
            </div>
          </div>
        </div>
      </div>
      {/* footer Info */}
      <div className='text-center text-sm text-gray-200'>Footer</div>

    </div>
    </div>
  )
}

export default TodoApp
