

import { useTheme } from '../context/ThemeContext'
import NavBar from '../components/common/NavBar';
import Stats from '../components/common/Stats';



const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <NavBar />
            
            <div className="w-full flex justify-center max-w-6xl flex gap-6 mt-5 min-h-[550px]">
                <Stats />
                {/* <Tasks /> */}
            </div>
        </div>



    )
}

export default HomePage
