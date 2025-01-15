import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slices/authslice";
import TaskInput from "../Components/taskinput";
import TaskList from "../Components/tasklist";
import WeatherInfo from "../Components/weatherinfo";
import "../Styles/homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <div className="homepage-container">
      <button onClick={handleLogout}>Logout</button>
      <div className="weather-info">
        <WeatherInfo />
      </div>
      <div className="task-input">
        <TaskInput />
      </div>
      <div className="task-list">
        <TaskList />
      </div>
    </div>
  );
};

export default HomePage;
