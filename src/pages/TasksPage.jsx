import React from 'react'
import NavBar from '../components/common/NavBar'
import Tasks from '../components/tasks/Tasks'


const TasksPage = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex justify-center items-center mt-4 '>
        <Tasks/>
      </div>
    </div>
  )
}

export default TasksPage
