

import { useTheme } from '../context/ThemeContext'
import NavBar from '../components/common/NavBar';
import Status from '../components/common/Status';
import Tasks from '../components/tasks/Tasks';


const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8">
            <NavBar />
            
            <div className="w-full max-w-6xl flex gap-6">
                <Status />
                <Tasks />
            </div>
        </div>



    )
}

export default HomePage
