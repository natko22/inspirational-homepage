import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Image from "./components/Image/Image";
import Quote from "./components/Quote/Quote";
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  return (
    <Container>
      <Header />
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Weather />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image />
          </Grid>
          <Grid item xs={12}>
            <Quote />
          </Grid>
          <Grid item xs={12}>
            <ToDoList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
