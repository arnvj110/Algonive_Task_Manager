import React from 'react';
import TaskDiv from '../layout/TaskDiv';

const Tasks = () => {
    return (
        <div className="w-[65%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-[500px]">
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>

            

            {/* Task List */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto tasks-scrollbar">
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
