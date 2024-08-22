import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Quote from "./components/Quote/Quote";
import ToDoList from "./components/ToDoList/ToDoList";
import BackgroundImage from "./components/Image/Image";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Background Image URL:", backgroundImage); // Debug log
    if (backgroundImage) {
      const img = new window.Image();
      img.src = backgroundImage;
      img.onload = () => {
        console.log("Image loaded successfully");
        setIsLoaded(true);
        setError(null);
      };
      img.onerror = () => {
        console.error("Failed to load image:", backgroundImage);
        setIsLoaded(false);
        setError(`Failed to load image: ${backgroundImage}`);
      };
    }
  }, [backgroundImage]);

  return (
    <div
      style={{
        backgroundImage: isLoaded ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 0.5s ease-in-out",
        backgroundColor: "#000",
      }}
    >
      <Container>
        <Header />
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Weather />
            </Grid>

            <Grid item xs={12}>
              <ToDoList />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <BackgroundImage setBackgroundImage={setBackgroundImage} />
          </Grid>
          <Grid item xs={12}>
            <Quote />
          </Grid>
        </Box>
        {error && (
          <div style={{ color: "red", marginTop: "20px" }}>{error}</div>
        )}
      </Container>
    </div>
  );
};

export default App;
