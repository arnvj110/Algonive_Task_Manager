import React from 'react'
import NavBar from '../components/common/NavBar'
import Tasks from '../components/tasks/Tasks'


const TasksPage = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 flex flex-col'>
      
      <div className='flex mt-4 '>
        <Tasks/>
      </div>
    </div>
  )
}

export default TasksPage
