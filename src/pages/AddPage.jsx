import React, { useState } from 'react';
import { addTask } from '../utils/localStorage'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    priority: 'P1',
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.title.trim() || !form.description.trim()) {
      alert('Please fill in both title and description.');
      return;
    }

    if (!form.startDate || !form.endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const start = new Date(form.startDate);
    const end = new Date(form.endDate);

    if (end < start) {
      alert('End date cannot be earlier than start date.');
      return;
    }

    const newTask = {
      id: Date.now(), // Simple unique ID
      title: form.title,
      desc: form.description,
      startDate: form.startDate,
      endDate: form.endDate,
      priority: form.priority,
      status: form.isCompleted ? 'completed' : 'pending',
    };

    addTask(newTask);
    alert('Task added successfully!');

    // Reset form
    setForm({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      priority: 'P1',
      isCompleted: false,
    });

    // Redirect to the home page or any other desired route after successful submission.
    navigate('/app/tasks');
    window.location.reload();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="mt-2 max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 dark:text-white">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold text-center mb-6">Add New Task</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:border-blue-500 dark:focus:border-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter task description"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:border-blue-500 dark:focus:border-blue-400"
            rows="4"
          ></textarea>
        </div>

        {/* Dates */}
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:border-blue-500 dark:focus:border-blue-400"
            />
          </div>

          <div className="flex-1">
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              min={form.startDate}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:border-blue-500 dark:focus:border-blue-400"
            />
          </div>
        </div>

        {/* Priority & Completion */}
        <div className="p-4 flex justify-between items-center gap-4 flex-wrap">
          {/* Priority */}
          <div className="flex items-center gap-4 w-full sm:w-[30%]">
            <label className="block font-semibold mb-1">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-500 dark:focus:border-blue-400 transition"
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          {/* Is Completed */}
          <div className="flex items-center gap-3 w-full sm:w-[48%] mt-4 sm:mt-0">
            <input
              type="checkbox"
              name="isCompleted"
              checked={form.isCompleted}
              onChange={handleChange}
              className="w-5 h-5 accent-green-500 bg-white dark:bg-gray-700 border dark:border-blue-500 rounded focus:ring focus:ring-blue-300"
            />
            <label className="font-semibold">Mark as Completed</label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer hover:scale-105"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
