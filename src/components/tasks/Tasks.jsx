import React from 'react';
import TaskDiv from '../layout/TaskDiv';

const Tasks = () => {
    return (
        <div className="w-[65%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>

            

            {/* Task List */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto tasks-scrollbar">
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
