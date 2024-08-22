import React from "react";
import { Typography, Box } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        borderRadius: "2px",
        textAlign: "center",
        width: "110%",
        marginLeft: "-4rem",
      }}
    >
      <Typography className="header" variant="h1">
        Inspirational Homepage
      </Typography>
    </Box>
  );
};

export default Header;
