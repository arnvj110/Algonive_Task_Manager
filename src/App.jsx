import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import AddPage from './pages/AddPage'

import { ThemeProvider } from './context/ThemeContext'
import TasksPage from './pages/TasksPage'
import NavBar from './components/common/NavBar'

import TaskViewPage from './pages/TaskViewPage'
import { checkAndUpdateExpiredTasks } from './utils/localStorage'
import { useEffect } from 'react'
import DashboardPage from './pages/DashboardPage'

function App() {
  
  useEffect(() => {
    
    checkAndUpdateExpiredTasks();

    const interval = setInterval(() => {
      checkAndUpdateExpiredTasks();
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <DashboardPage />

        </div>

  },
  {
      path: '/tasks',
      element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <TasksPage />

        </div>
  },
  {
    path: '/add',
    element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <AddPage />

        </div>
  },
  {
    path: '/task/:id',
    element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <NavBar />
      <TaskViewPage task={{title:'test', description:'test'}} />
    </div>
  }
]);



  return (
    <ThemeProvider>
      <RouterProvider router = {router} />
    </ThemeProvider>
  )
}

export default App