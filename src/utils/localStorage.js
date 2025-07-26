const TASKS_KEY = 'tasks';

// tasks = {
//     id,
//     title,
//     desc,
//     startDate,
//     endDate,
//     priority,
//     status,
// }


export const getTasks = () => {
  try {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to retrieve tasks: ', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks: ', error);
  }
};

export const addTask = (task) => {
  const tasks = getTasks();
  const updated = [...tasks, task];
  saveTasks(updated);
};

export const updateTask = (updatedTask) => {
  const tasks = getTasks();
  const updated = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveTasks(updated);
};

export const deleteTask = (taskId) => {
  const tasks = getTasks();
  const filtered = tasks.filter((task) => task.id !== taskId);
  saveTasks(filtered);
};

export const getTaskById = (id) => {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id);
};

export const checkAndUpdateExpiredTasks = () => {
  const tasks = getTasks();
  const today = new Date();
  let updated = false;

  const updatedTasks = tasks.map((task) => {
    const endDate = new Date(task.endDate);
    if (task.status === 'pending' && endDate < today) {
      updated = true;
      return { ...task, status: 'expired' };
    }
    return task;
  });

  if (updated) {
    saveTasks(updatedTasks);
  }
};
