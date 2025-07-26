import { createSlice } from '@reduxjs/toolkit'


const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('tasks');
        return data ? JSON.parse(data) : [];

    } catch(error) {
        console.log(error);
        return [];
    }
}

const saveToLocalStorage = (data) => {
    try{
        localStorage.setItem('tasks',JSON.stringify(data));
    }catch(err){
        console.log(err)
    }
}

const initialState = {
  taskList : loadFromLocalStorage(),
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      
        const newTask = action.payload;
        state.taskList.push(newTask);
        saveToLocalStorage(state.taskList);

    },
    deleteTask: (state, action) => {
      const idToDelete = action.payload;
      state.taskList = state.taskList.filter((task)=> task.id !== idToDelete);
      saveToLocalStorage(state.taskList);
    },
    updateTask: (state, action) => {
      
        const updated = action.payload;
        const index = state.taskList.findIndex(task=> task.id === updated.id);
        if(index !== -1){
            state.taskList[index] = updated;
            saveToLocalStorage(state.taskList);
        }

    },
    setTasks:(state,action)=>{
        state.taskList=action.payload;
        saveToLocalStorage(state.taskList);
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer