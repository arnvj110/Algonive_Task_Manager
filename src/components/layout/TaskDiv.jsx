import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTask } from '../../utils/localStorage'; // adjust this import if needed

const TaskDiv = ({ task }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(task.status?.toLowerCase());
  const statusMap = {
    pending: ['bg-yellow-100', 'text-yellow-700', 'bg-yellow-500'],
    completed: ['bg-green-100', 'text-green-700', 'bg-green-500'],
    expired: ['bg-red-100', 'text-red-700', 'bg-red-500'],
  };

  
  const [bgColor, textColor, dotColor] = statusMap[status] || ['bg-gray-200', 'text-gray-600', 'bg-gray-500'];

  const handleMarkAsCompleted = (e) => {
    e.stopPropagation(); // prevent card navigation
    const updatedTask = { ...task, status: 'completed', isCompleted: true };
    updateTask(updatedTask);
    setStatus('completed');
    // window.location.reload(); // reload to reflect change (you can also lift state instead)
  };

  return (
    <div
      className="group flex flex-col gap-5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:shadow-xl
      w-full min-w-[300px] max-w-[400px] items-center justify-center min-h-[200px] max-h-[600px] cursor-pointer hover:scale-105"
      onClick={() => navigate(`/app/task/${task.id}`)}
    >
      {/* Top Row: Status + Action */}
      <div className="w-[95%] mb-2 p-2 flex justify-between items-center">
        {/* Status Badge */}
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgColor} ${textColor} text-sm font-medium`}>
          <span className={`h-2 w-2 rounded-full ${dotColor}`} />
          {status || 'Unknown'}
        </span>

        {/* Mark as Completed Button (appears on hover) */}
        {task.status !== 'completed' && (
          <button
            onClick={handleMarkAsCompleted}
            className="scale-0 group-hover:scale-100 transition-transform duration-300 origin-right text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full shadow-md cursor-pointer hover:scale-105 text-[1.1rem]"
          >
            Done
          </button>
        )}
      </div>

      {/* Title with Priority */}
      <div className="w-[95%] h-30 flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white mb-2 rounded-md border border-gray-400 dark:border-blue-600 bg-gray-100 dark:bg-gray-700 relative">
        <span className='w-[95%] flex justify-center truncate'>

        {task.title || 'No Title'}
        </span>

        {task.priority && (
          <span className="absolute right-0 top-0 mr-2 mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            {task.priority.toUpperCase()}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="w-[95%] overflow-hidden text-gray-600 dark:text-gray-300 mb-4 truncate">
        {task.desc || 'No description available.'}
      </div>

      {/* Dates */}
      <div className="flex justify-between w-[95%] text-gray-600 dark:text-gray-300 mb-4">
        <span className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Start Date</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{task.startDate || 'N/A'}</span>
        </span>
        <span className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">End Date</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{task.endDate || 'N/A'}</span>
        </span>
      </div>
    </div>
  );
};

export default TaskDiv;
