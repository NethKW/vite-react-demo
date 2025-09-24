import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredTodos, SelectFilters, selectTodos, selectTodosStats, selectIsAddingTodo } from '../store/selectors';
import { setIsAddingTodo } from '../store/todoSlice';


function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  console.log(todos);
  const filteredTodos = useSelector(selectFilteredTodos);
  const stats = useSelector(selectTodosStats);
  const filter = useSelector(SelectFilters);
  const isAddingTodo = useSelector(selectIsAddingTodo);
  console.log(todos);

  const handleAddTodoClick =() => {
    dispatch(setIsAddingTodo(true));
    console.log(isAddingTodo);
  }

console.log(stats.completionPercentage);

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 py-8 px-4'>
      <div className='max-w-2xl mx-auto'>
        {/*header*/}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-b0ld text-blue-500 mb-2'>Task-Tracker</h1>
          <p>Simplify your day, one step at a time</p>
        </div>

        {/*Stats Card*/}
        {stats.total > 0 && (<div className='bg-white backdrop-blur-sm rounded-2xl p-6 mb6 border border-gray-400 shadow-lg'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-lg font-semibold text-gray-500'>
              Progress Overview
            </h2>
            <div className='text-2xl font-bold text-green-500'>
            {/* Stats Completed logics*/}
            {stats.completionPercentage}%
          </div>
          </div>

          <div className='w-full bg-gray-300 rounded-full h-3 mb-4'>
            {/*Prgressbar */}
            <div className='bg-gradient-to-b from-green-500 to-green-600 h-3 rounded-full transition-all duration-400 ease-out' style={{width: `${stats.completionPercentage}%`}}></div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Total logic */}
                {stats.total}
              </div>
              <div className='text-sm text-gray-800'>Total</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Active logic */}
                {stats.active}
              </div>
              <div className='text-sm text-gray-800'>Active</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-black'>
                {/* Stats Completed logic */}
                {stats.completed}
              </div>
              <div className='text-sm text-gray-800'>Completed</div>
            </div>

          </div>
        </div>)}
        {/* Main Todo */}
        <div className='bg-white backdrop-blur-md mt-4 rounded-2xl border border-gray-300 shadow-lg overflow-hidden'>
          {/* Action bar */}
          <div className='p-6 border-b border-gray-300'>
            <div className='flex items-center justify-between mb-4'>
              <button className='flex item-center gap-3 bg-blue-400 hover:bg-blue-500 hover:text-black text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer font medium'
              onClick={handleAddTodoClick}>
                <AddIcon />Add
              </button>
              
            
            {/* Clear and delete button */}
            {stats.total > 0 && (
              <div className='flex item-center gap-3'>
                {stats.completed > 0 && (
                  <button className='flex item-center gap-3 text-red-400 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50'>
                <ClearIcon />Clear Completed
              </button>
                )}

              {stats.active > 0 &&(
                <button className='flex item-center gap-3 text-green-400 hover:text-green-700 px-3 py-2 rounded-lg hover:bg-red-50'>
                <CheckIcon />Mark All Completed
              </button>
              )}
               </div>
              

            )}
              
            
          </div>
          {/*Todo filter */}
            <TodoFilter currentfilter={filter} stats={stats} />
            
        </div>
        {/* todo form */}
        {isAddingTodo && (
          <div className='p-6 border-b border-gray-300 bg-gray-100'>
          <TodoForm placeholer="what need to be done" />
        </div>
        )}
        {/* todo list */}
        <div className='max-h-96 overflow-y-auto'>
          {filteredTodos.length === 0 ? (
            <div className='p-12 text-center'>
            {todos.length === 0 ? <div className='text-black-300'>
              <PanoramaFishEyeIcon sx={{ fontSize: 28 }} className='mx-auto mb-4 opacity-50' />
              <p className='text-lg font-medium'>No Todos yet</p>
              <p>Add your 1st todo to get started.</p>
            </div>

             : (
            <div>
              <FilterAltOutlinedIcon sx={{ fontSize: 58 }} className='mx-auto mb-4 opacity-50'/>
              <p>No {filter} TOdos
              <p className='text-sm'>
                {filter === "completed" && "all your todos are completed"}
                {filter === "active" && "no completed todos yet,keep going"}
              </p>
              </p>
              
            </div>)}
          </div>
          ) : (
          <div className='divide-y divide-gray-500'>
            {filteredTodos.map((todo, index) => {
               return <TodoItem key={todo.id} todo={todo} index={index} />
            })}
          </div>)}
        </div>
      </div>
      {/* footer Info */}
      <div className='text-center text-sm text-gray-200'>Footer</div>

    </div>
    </div>
  )
}

export default TodoApp
