import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import UpdatePage from './pages/UpdatePage'
import DeletePage from './pages/DeletePage'
import { ThemeProvider } from './context/ThemeContext'
import TasksPage from './pages/TasksPage'

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
  },
  {
      path: '/tasks',
      element: <TasksPage />
  },
  {
    path: '/add',
    element: <AddPage />
  },
  {
    path: '/update/:taskId',
    element: <UpdatePage />
  },
  {
    path: '/delete/:taskId',
    element: <DeletePage />
  }
])

  return (
    <ThemeProvider>
      <RouterProvider router = {router} />
    </ThemeProvider>
  )
}

export default App