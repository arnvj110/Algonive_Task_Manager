import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import AddPage from './pages/AddPage';
import { ThemeProvider } from './context/ThemeContext';
import TasksPage from './pages/TasksPage';
import NavBar from './components/common/NavBar';
import TaskViewPage from './pages/TaskViewPage';
import { checkAndUpdateExpiredTasks } from './utils/localStorage';
import { useEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    checkAndUpdateExpiredTasks();
    const interval = setInterval(() => {
      checkAndUpdateExpiredTasks();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const router = createBrowserRouter([
    // Auto-redirect from "/" to "/app/tasks"
    {
      path: '/',
      element: <Navigate to="/app/tasks" replace />,
    },
    // Tasks route (now effectively the home route)
    {
      path: '/app/tasks',
      element: (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
          <NavBar />
          <TasksPage />
        </div>
      ),
    },
    // Dashboard route
    {
      path: '/app/dashboard',
      element: (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
          <NavBar />
          <DashboardPage />
        </div>
      ),
    },
    // Add task route
    {
      path: '/app/add',
      element: (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
          <NavBar />
          <AddPage />
        </div>
      ),
    },
    // Task details route
    {
      path: '/app/task/:id',
      element: (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
          <NavBar />
          <TaskViewPage task={{ title: 'test', description: 'test' }} />
        </div>
      ),
    },
    // Catch-all redirect (invalid routes → /app/tasks)
    {
      path: '*',
      element: <Navigate to="/app/tasks" replace />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;