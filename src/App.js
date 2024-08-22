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
    if (backgroundImage) {
      const img = new window.Image();
      img.src = backgroundImage;
      img.onload = () => {
        setIsLoaded(true);
        setError(null);
      };
      img.onerror = () => {
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
            {/* Left column with ToDoList and Quote */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box mb={3} sx={{ flex: 1 }}>
                  <ToDoList />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Quote />
                </Box>
              </Box>
            </Grid>

            {/* Right column with Weather and BackgroundImage */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box mb={3} sx={{ flex: 1 }}>
                  <Weather />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <BackgroundImage setBackgroundImage={setBackgroundImage} />
                </Box>
              </Box>
            </Grid>
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
