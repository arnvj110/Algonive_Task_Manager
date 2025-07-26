

import { useTheme } from '../context/ThemeContext'

import Stats from '../components/common/Stats';
import { getTasks } from '../utils/localStorage';



const DashboardPage = () => {
    const { theme, toggleTheme } = useTheme();
    
    
    const tasks = getTasks();
    return (
        <div className="relative flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            
            
            <div className="w-full flex justify-center max-w-6xl flex gap-6 mt-5 min-h-[550px]">
                <Stats tasks={tasks} />
                {/* <Tasks /> */}
            </div>
        </div>



    )
}

export default DashboardPage
