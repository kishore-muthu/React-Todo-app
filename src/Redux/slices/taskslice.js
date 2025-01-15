import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem("tasks");
    return serializedTasks ? JSON.parse(serializedTasks) : [];
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
      saveTasksToLocalStorage(state.tasks);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { setTasks, addTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
