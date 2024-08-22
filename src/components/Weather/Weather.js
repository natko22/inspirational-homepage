import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, CircularProgress } from "@mui/material";
import { fetchWeather } from "../../features/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
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
    return (
      <CircularProgress
        sx={{
          display: "block",
          margin: "auto",
          color: "#FFFFFF",
        }}
      />
    );
  }

  if (status === "failed") {
    return (
      <Typography
        variant="h6"
        color="error"
        sx={{ textAlign: "center", color: "#FFFFFF" }}
      >
        Error: {error}
      </Typography>
    );
  }

  if (!weather) {
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        No weather data available
      </Typography>
    );
  }

  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        borderRadius: "5px",
        padding: "20px",
        width: { xs: "80%", md: "90%" },
        margin: "0 auto",
        minHeight: "210px",
        maxHeight: "500px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          marginRight: { md: "8px" },
          marginBottom: { xs: "10px", md: "0" },
        }}
      >
        <img src={iconUrl} alt={weather.weather[0].description} />
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "black", textAlign: "center" }}
        >
          Weather at your location
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          {weather.weather[0].description}
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          {weather.main.temp}°C
        </Typography>
      </Box>
    </Box>
  );
};

export default Weather;
