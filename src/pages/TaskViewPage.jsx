import React, { useState } from 'react';

const TaskViewPage = () => {
  // Demo static task data
  const demoTask = {
    title: 'Demo Task Title',
    description: 'This is a sample description of the task to demonstrate the UI.',
    startDate: '2025-08-01',
    endDate: '2025-08-15',
    priority: 'P1',
    isCompleted: false,
  };

  const [form, setForm] = useState(demoTask);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleUpdateClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    alert('Delete clicked (demo mode, no real deletion)');
  };

  return (
    <div className="mt-2 max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Task Details (Demo)</h2>

      <form className="space-y-5" onSubmit={e => e.preventDefault()}>

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300
              ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            disabled={!isEditing}
            rows="4"
            className={`tasks-scrollbar w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300
              ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
          ></textarea>
        </div>

        <div className="flex justify-between gap-4">
          {/* Start Date */}
          <div className="flex-1">
            <label className="block font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300
                ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
            />
          </div>

          {/* End Date */}
          <div className="flex-1">
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300
                ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
            />
          </div>
        </div>

        <div className="p-4 flex justify-between">
          {/* Priority */}
          <div className="flex gap-3 items-center">
            <label className="block font-semibold mb-1">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-300
                ${!isEditing ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : ''}`}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          {/* Is Completed */}
          <div className="flex gap-3 items-center justify-center">
            <input
              type="checkbox"
              name="isCompleted"
              checked={form.isCompleted}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-5 h-5 accent-green-500 cursor-pointer"
            />
            <label className="block font-semibold mb-1 cursor-pointer">Completed</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleUpdateClick}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {isEditing ? 'Save' : 'Update'}
          </button>

          <button
            type="button"
            onClick={handleDeleteClick}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskViewPage;
