import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useLocation, useNavigate } from 'react-router-dom';


const NavBar = () => {

    const location = useLocation();
    const isDashPage = location.pathname === '/app/dashboard';
    const isTasksPage = location.pathname === '/app/tasks';
    const isAddTaskPage = location.pathname === '/app/add';
    const navigate = useNavigate();

  return (
    <nav className="relative z-10 w-full h-20 flex items-center justify-between px-6">
      <h1 className="text-[2rem] font-semibold text-gray-800 dark:text-white">Task Manager</h1>

      {/* Centered container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 items-center justify-center text-gray-800 dark:text-white">
        <span
  className={`border border-gray-300 rounded-lg px-4 py-2 shadow-md bg-white dark:bg-gray-800 text-gray-700 text-xl font-bold dark:text-gray-300
    hover:border-b-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
    transition-all duration-300 ease-in-out
     cursor-pointer
    hover:shadow-lg hover:shadow-blue-500/50 ${isDashPage ? 'scale-110 shadow-lg shadow-blue-500' : ''}`}
    onClick={() => {
        navigate('/app/dashboard')
    }}
>
  Dashboard
</span>


<span
  className={`border border-gray-300 rounded-lg px-4 py-2 shadow-md bg-white dark:bg-gray-800 text-gray-700 text-xl font-bold dark:text-gray-300
    hover:border-b-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
    transition-all duration-300 ease-in-out
     cursor-pointer
    hover:shadow-lg hover:shadow-blue-500/50 ${isTasksPage ? 'scale-110 shadow-lg shadow-blue-500' : ''}`}
    onClick={() => {
        navigate('/app/tasks')
        }}
>
  Tasks
</span>
<span
  className={`border border-gray-300 rounded-lg px-4 py-2 shadow-md bg-white dark:bg-gray-800 text-gray-700 text-xl font-bold dark:text-gray-300
    hover:border-b-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
    transition-all duration-300 ease-in-out
     cursor-pointer
    hover:shadow-lg hover:shadow-blue-500/50 ${isAddTaskPage ? 'scale-110 shadow-lg shadow-blue-500' : ''}`}
    onClick={() => {
        navigate('/app/add')
        }}
>
  Add Task
</span>


      </div>

      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
