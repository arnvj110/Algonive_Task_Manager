

import { useTheme } from '../context/ThemeContext'

const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Welcome to your Task Manager!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Current theme: <span className="font-medium">{theme}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                You can toggle between light and dark themes using the button below.
            </p>
            <button
                onClick={toggleTheme}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Toggle Theme
            </button>
        </div>


    )
}

export default HomePage
