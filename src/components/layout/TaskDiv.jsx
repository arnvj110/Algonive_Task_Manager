import React from 'react'

const TaskDiv = () => {
    const statusObject = [
    {
      status: "Pending",
      color: ["bg-yellow-100", "text-yellow-700", "bg-yellow-500"]
    },
    {
      status: "Completed",
      color: ["bg-green-100", "text-green-700", "bg-green-500"]
    },
    {
      status: "Expired",
      color: ["bg-red-100", "text-red-700", "bg-red-500"]
    }
  ];
  const status = statusObject[1].status;
  const [bgColor, textColor, dotColor] = statusObject[1].color;
    return (


        <div className='flex flex-col gap-5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:shadow-xl w-full min-w-[300px] max-w-[400px] items-center justify-center min-h-[200px] max-h-[600px] cursor-pointer hover:scale-105'>

            {/* Status */}

            <div className="w-[95%] mb-2 p-2 rounded">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgColor} ${textColor} text-sm font-medium`}>
          <span className={`h-2 w-2 rounded-full ${dotColor}`} />
          {status}
        </span>
            </div>


            {/* Heading */}
            <div className='w-[95%] h-30 flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white mb-2 rounded-md border border-gray-400 dark:border-blue-600 bg-gray-100 dark:bg-gray-700 relative'>

                Heading

                <span className='absolute right-0 top-0 mr-2 mt-2 text-gray-500 dark:text-gray-400'>
                  P0
                </span>
            </div>


            {/* Description */}
            <div className="w-[95%] overflow-hidden text-gray-600 dark:text-gray-300 mb-4 h-auto line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nulla sequi iste, laudantium sed consectetur sunt omnis praesentium quia, repellat mollitia beatae ex minus velit nobis dolore dolores atque dignissimos.
            </div>


            {/* Date */}
            <div className='flex justify-between w-[95%] text-gray-600 dark:text-gray-300 mb-4'>
                <span className='flex flex-col items-center'>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>Start Date</span>
                    <span className='text-sm font-semibold text-gray-800 dark:text-white'>2023-10-01</span>
                </span>
                <span className='flex flex-col items-center'>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>End Date</span>
                    <span className='text-sm font-semibold text-gray-800 dark:text-white'>2023-10-15
                    </span>
                </span>
            </div>


        </div>
    )
}

export default TaskDiv
