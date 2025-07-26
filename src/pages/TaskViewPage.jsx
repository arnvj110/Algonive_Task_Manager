import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask, deleteTask } from '../utils/localStorage';

const TaskViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  console.log(form);
  useEffect(() => {
    const task = getTaskById(Number(id));
    if (task) {
      setForm(task);
    } else {
      alert('Task not found');
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const determineStatus = (task) => {
    if (task.status === "completed") return 'completed';

    const now = new Date();
    const end = new Date(task.endDate);
    return end < now ? 'expired' : 'pending';
  };
  console.log(form);
  const handleUpdateClick = () => {
    if (isEditing) {
      if (new Date(form.endDate) < new Date(form.startDate)) {
        alert('End date cannot be before start date!');
        return;
      }

      const updatedTask = {
        ...form,
        status: determineStatus(form),
      };

      updateTask(updatedTask);
      alert('Task updated!');
    }

    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(Number(id));
      navigate('/');
    }
  };

  if (!form) return null;

  return (
    <div className="mt-2 max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Task Details</h2>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring 
              ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="desc"
            value={form.desc}
            onChange={handleChange}
            disabled={!isEditing}
            rows="4"
            className={`tasks-scrollbar w-full border rounded px-3 py-2 focus:outline-none focus:ring 
              ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
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
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring 
                ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring 
                ${isEditing ? 'dark:border-blue-500 dark:focus:border-blue-400' : 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'}`}
            />
          </div>
        </div>

        {/* Priority & Completed */}
        <div className="p-4 flex justify-between">
          <div className="flex gap-3 items-center">
            <label className="block font-semibold mb-1">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring 
                ${!isEditing ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : ''}`}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <input
              type="checkbox"
              name="isCompleted"
              checked={form.status === 'completed'}
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
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            {isEditing ? 'Save' : 'Update'}
          </button>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskViewPage;
