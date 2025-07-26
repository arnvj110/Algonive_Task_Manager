import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import UpdatePage from './pages/UpdatePage'
import DeletePage from './pages/DeletePage'
import { ThemeProvider } from './context/ThemeContext'
import TasksPage from './pages/TasksPage'
import NavBar from './components/common/NavBar'

import TaskViewPage from './pages/TaskViewPage'

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <HomePage />

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
    path: '/update/:taskId',
    element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <UpdatePage />

        </div>
  },
  {
    path: '/delete/:taskId',
    element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <NavBar />
        <DeletePage />

        </div>
  }, {
    path: '/task/:id',
    element: <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <NavBar />
      <TaskViewPage task={{title:'test', description:'test'}} />
    </div>
  }
])

  return (
    <ThemeProvider>
      <RouterProvider router = {router} />
    </ThemeProvider>
  )
}

export default App