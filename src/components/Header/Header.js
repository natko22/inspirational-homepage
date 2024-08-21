import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" color="#CFE0C3">
        Inspirational Homepage
      </Typography>
    </Box>
  );
};

export default Header;
