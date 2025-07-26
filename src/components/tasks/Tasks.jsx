import React, { useEffect, useState } from 'react';
import TaskDiv from '../layout/TaskDiv';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getTasks } from '../../utils/localStorage';

const Tasks = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    completed: false,
    pending: false,
    expired: false,
    P0: false,
    P1: false,
    P2: false,
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  // Filter Logic
  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      (!filterOptions.completed && !filterOptions.pending && !filterOptions.expired) ||
      filterOptions[task.status?.toLowerCase()];

    const priorityMatch =
      (!filterOptions.P0 && !filterOptions.P1 && !filterOptions.P2) ||
      filterOptions[task.priority];

    const searchMatch =
      task.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.desc?.toLowerCase().includes(searchQuery.toLowerCase());

    return statusMatch && priorityMatch && searchMatch;
  });

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="p-3 mb-3 flex justify-center items-center gap-5 flex-wrap">

        {/* Add Task Button */}
        <button
          onClick={() => navigate('/app/add')}
          className="px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300
            bg-red-400 text-white shadow-lg scale-105 hover:scale-110 hover:shadow-md"
        >
          Add new task
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-sm px-3 py-2 mr-4 rounded-md border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white 
            placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none 
            focus:ring-2 focus:ring-green-500 transition duration-300"
        />

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300
              border border-gray-300 dark:border-gray-600
              ${showFilter ? 'bg-green-500 text-white shadow-lg scale-105' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white'}
              hover:scale-105 hover:shadow-md`}
          >
            Filter
            {showFilter ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          {showFilter && (
            <div className="absolute top-[110%] left-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md p-3 w-56 z-10">
              <h3 className="text-md font-bold mb-2 text-gray-800 dark:text-white">Filter Options</h3>
              <div className="flex flex-col gap-1">
                {/* Status Filters */}
                {['completed', 'pending', 'expired'].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2 rounded-md text-md"
                  >
                    <input
                      type="checkbox"
                      checked={filterOptions[option]}
                      onChange={() =>
                        setFilterOptions((prev) => ({
                          ...prev,
                          [option]: !prev[option],
                        }))
                      }
                      className="accent-green-500"
                    />
                    <span className="capitalize text-gray-700 dark:text-gray-200">{option}</span>
                  </label>
                ))}
                {/* Priority Filters */}
                {['P0', 'P1', 'P2'].map((priority) => (
                  <label
                    key={priority}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2 rounded-md text-md"
                  >
                    <input
                      type="checkbox"
                      checked={filterOptions[priority]}
                      onChange={() =>
                        setFilterOptions((prev) => ({
                          ...prev,
                          [priority]: !prev[priority],
                        }))
                      }
                      className="accent-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-200">{priority}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Task Grid */}
      <div className="flex flex-wrap max-h-[520px] overflow-y-auto tasks-scrollbar gap-5 p-6 justify-center items-center">
        {tasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tasks available. Please add some.</p>
        ) : filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tasks match the selected filters.</p>
        ) : (
          filteredTasks.map((task) => <TaskDiv key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Tasks;
