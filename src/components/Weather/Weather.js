import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { fetchWeather } from "../../features/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    // Get the user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ lat: latitude, lon: longitude });
          },
          (error) => {
            console.error("Error getting location: ", error);
            setCoordinates(null);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setCoordinates(null);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (coordinates) {
      dispatch(fetchWeather(coordinates));
    }
  }, [coordinates, dispatch]);

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "failed") {
    return (
      <Typography variant="h6" color="error">
        Error: {error}
      </Typography>
    );
  }

  if (!weather) {
    return <Typography variant="h6">No weather data available</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", padding: 2, borderRadius: 2 }}>
      <Typography variant="h5" component="div" sx={{ color: "#1F363D" }}>
        Weather at your location
      </Typography>
      <Typography variant="body1" sx={{ color: "#40798C" }}>
        {weather.weather[0].description}
      </Typography>
      <Typography variant="body1" sx={{ color: "#40798C" }}>
        {weather.main.temp}°C
      </Typography>
    </Box>
  );
};

export default Weather;
