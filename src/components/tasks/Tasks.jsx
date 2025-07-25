import React, { useState } from 'react';
import TaskDiv from '../layout/TaskDiv';

const Tasks = () => {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className="w-[65%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
            <div className='border p-3'>
                <span
                    onClick={() => setShowFilter(!showFilter)}
                    className={`px-4 py-2 rounded-md text-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out
                    border border-gray-300 dark:border-gray-600
                    ${showFilter ? 'bg-green-500 text-white shadow-lg' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white'}
                    hover:scale-110 hover:shadow-lg
                    `}

                >
                    Filter
                </span>


            </div>




            {/* Task List */}
            <div className="space-y-4 max-h-[475px] overflow-y-auto tasks-scrollbar">
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
