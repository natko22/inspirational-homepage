// src/components/Weather/Weather.js
import React from "react";
import mockWeatherData from "../../mockData/weather";

const Weather = () => {
  const { name, weather, main } = mockWeatherData;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>{weather[0].description}</p>
      <p>{main.temp}°C</p>
    </div>
  );
};

export default Weather;
