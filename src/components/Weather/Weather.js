import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, CircularProgress } from "@mui/material";

const Weather = () => {
  const { data, loading, error } = useSelector((state) => state.weather);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      {data && (
        <>
          <Typography variant="h4">Weather in {data.name}</Typography>
          <Typography variant="h6">{data.weather[0].description}</Typography>
          <Typography variant="h6">{data.main.temp}°C</Typography>
        </>
      )}
    </Box>
  );
};

export default Weather;
