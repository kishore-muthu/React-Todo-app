import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";
import taskReducer from "./slices/taskslice"; // Assuming you have a task slice
import weatherReducer from "./slices/weatherslice"; // If you have a weather slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer,
  },
});

export default store;
