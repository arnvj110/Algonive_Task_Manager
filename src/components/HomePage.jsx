

import { useTheme } from '../context/ThemeContext'
import Status from './Status';
import Tasks from './Tasks';

const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='border border-red-500 min-h-screen flex items-center justify-center flex-col'>
            <div className='flex justify-between item-center w-[80%] border border-yellow-500 p-4'>
                <Status />
                <Tasks />
            </div>

        </div>


    )
}

export default HomePage
