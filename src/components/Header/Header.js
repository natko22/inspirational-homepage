import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1F363D", padding: "10px" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ color: "#CFE0C3", fontWeight: "bold" }}>
          Inspirational Homepage
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
