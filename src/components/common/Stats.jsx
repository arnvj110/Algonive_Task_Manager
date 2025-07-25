import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Stats = () => {
    const { theme } = useTheme();
    const totalTasks = 30;
    const completedTasks = 20;
    const overdueTasks = 3;
    const inProgressTasks = 7;

    const progressPercent = Math.round((completedTasks / totalTasks) * 100);
    const radius = 60;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

    const stats = [
        { label: 'Total', value: totalTasks, color: 'bg-gray-100 dark:bg-gray-700' },
        { label: 'Completed', value: completedTasks, color: 'bg-green-100 dark:bg-green-700' },
        { label: 'In Progress', value: inProgressTasks, color: 'bg-yellow-100 dark:bg-yellow-700' },
        { label: 'Overdue', value: overdueTasks, color: 'bg-red-100 dark:bg-red-700' }
    ];

    return (
        <div className="w-[50%] bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {/* Circular Progress */}
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    Progress
                </h2>
                <div className="flex justify-center items-center relative w-[140px] h-[140px]">
                    <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
                        <circle
                            stroke={theme === "light" ? "#E5E7EB" : "#374151"}
                            fill="transparent"
                            strokeWidth={stroke}
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                        />
                        <circle
                            stroke="#22C55E"
                            fill="transparent"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                            className="transition-all duration-700 ease-in-out"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-800 dark:text-white">
                            {progressPercent}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between gap-4 text-gray-800 dark:text-gray-100">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-4 ${stat.color} rounded-lg shadow text-center flex-1 basis-[48%]`}
                    >
                        <h3 className="text-sm font-medium mb-1">{stat.label}</h3>
                        <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
