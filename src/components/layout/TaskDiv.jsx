import React from 'react'

const TaskDiv = () => {
    return (
        <div className="dark:bg-gray-700 p-4 rounded-lg shadow-lg transition duration-300 border border-gray-200 dark:border-gray-600 w-[99%]">
            {/* Task Content */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Task Title</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Task description goes here.</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Due: July 30, 2025</p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
                <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">
                    Complete
                </button>
                <button className="px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500">
                    Incomplete
                </button>
                <button className="px-3 py-1 text-sm bg-gray-300 text-black rounded hover:bg-gray-400">
                    Update
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskDiv
