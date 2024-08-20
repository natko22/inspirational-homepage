import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { setWeather } from "../../features/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);

  const updateWeather = () => {
    const newWeather = {
      name: "Los Angeles",
      weather: [{ description: "Sunny" }],
      main: { temp: 28 },
    };
    dispatch(setWeather(newWeather));
  };

  if (!weather || !weather.name) {
    return <Typography variant="h6">Loading weather data...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", padding: 2, borderRadius: 2 }}>
      <Typography variant="h5" component="div" sx={{ color: "#1F363D" }}>
        Weather in {weather.name}
      </Typography>
      <Typography variant="body1" sx={{ color: "#40798C" }}>
        {weather.weather[0].description}
      </Typography>
      <Typography variant="body1" sx={{ color: "#40798C" }}>
        {weather.main.temp}°C
      </Typography>
      <Button
        variant="contained"
        onClick={updateWeather}
        sx={{ marginTop: 2, backgroundColor: "#70A9A1", color: "#fff" }}
      >
        Update Weather
      </Button>
    </Box>
  );
};

export default Weather;
