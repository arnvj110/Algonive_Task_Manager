import React from 'react'

const Status = () => {
    return (
        <div className="w-[35%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Progress</h2>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                <div className="h-4 bg-green-500 rounded-full" style={{ width: '50%' }} />
            </div>

            <h2 className="text-xl font-semibold mb-2">Total Tasks</h2>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">12</p>
        </div>

    )
}

export default Status
