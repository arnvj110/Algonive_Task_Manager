import React, { useState } from 'react';
import TaskDiv from '../layout/TaskDiv';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Tasks = () => {
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        completed: false,
        pending: false,
        overdue: false,
        priority: false,
    });

    return (
        <div className="w-full">
            <div className="p-3 mb-3 flex justify-center items-center gap-5">
                {/* Add New Task Button */}
                <button
                onClick={()=>{navigate('/add')}}
                className="px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300
          bg-red-400 text-white shadow-lg scale-105 hover:scale-110 hover:shadow-md
        ">Add new task</button>
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full max-w-sm px-3 py-2 mr-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />

                {/* Filter Wrapper (Relative for positioning dropdown) */}
                <div className="relative">
                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300
        border border-gray-300 dark:border-gray-600
        ${showFilter ? 'bg-green-500 text-white shadow-lg scale-105' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white'}
        hover:scale-105 hover:shadow-md
      `}
                    >
                        Filter
                        {showFilter && <FaAngleUp />}
                        {!showFilter && <FaAngleDown />}
                    </button>


                    {/* Dropdown absolutely positioned relative to this wrapper */}
                    {showFilter && (
                        <div className="absolute top-[110%] left-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md p-3 w-56 z-10">
                            <h3 className="text-md font-bold mb-2 text-gray-800 dark:text-white">Filter Options</h3>
                            <div className="flex flex-col gap-1">
                                {Object.keys(filterOptions).map((option) => (
                                    <label
                                        key={option}
                                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2 rounded-md text-md"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={filterOptions[option]}
                                            onChange={() =>
                                                setFilterOptions({
                                                    ...filterOptions,
                                                    [option]: !filterOptions[option],
                                                })
                                            }
                                            className="accent-green-300"
                                        />
                                        <span className="capitalize text-gray-700 dark:text-gray-200">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Task List */}
            <div className="flex flex-wrap max-h-[520px] overflow-y-auto tasks-scrollbar gap-5 p-6 justify-center items-center">
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
                <TaskDiv />
            </div>
        </div>
    );
};

export default Tasks;
