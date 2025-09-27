import React from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function TodoFilter({ currentfilter, stats, onFilterChange }) {
  const filter = [
    { key: "all", label: "All", icon: ListOutlinedIcon, count: stats.total },
    { key: "active", label: "Active", icon: WatchLaterOutlinedIcon, count: stats.active },
    { key: "completed", label: "Completed", icon: CheckCircleOutlineOutlinedIcon, count: stats.completed },
  ];
  
  return (
    <div className='flex item-center justify-center'> 
    <div className='inline-flex bg-gray-200 rounded-lg p-1'>
      {filter.map(({key, label, icon: Icon, count}) => {
        return <button className={`flex items-center gap-3 px-2 py-2 rounded-md test-sm transition-all duration-200 ${currentfilter === key ? "bg-white text-gray-80 shadow-md" : "text-gray-600 hover:text-gray-950 hover:bg-gray-400"}`} 
        key={key}
        onClick={()=> onFilterChange(key)}><Icon />
        <span>{label}</span>
        <span>{count}</span>
        </button>
      })}
      </div> 
      </div>
  );
}


export default TodoFilter
