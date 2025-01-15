import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../Redux/slices/weatherslice"
import "../Styles/weatherinfo.css";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData("New York")); // Default city
  }, [dispatch]);

  if (status === "loading") return <div>Loading weather...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="weather-info">
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
