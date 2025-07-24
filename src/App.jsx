import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import AddPage from './components/AddPage'
import UpdatePage from './components/UpdatePage'
import DeletePage from './components/DeletePage'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
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