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
        width: { xs: "100%", md: "110%" }, // Full width on small screens, 110% on medium and larger
        marginLeft: { xs: "0", md: "-4rem" }, // No margin shift on small screens, shift on medium and larger
      }}
    >
      <Typography
        className="header"
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem", lg: "4rem" }, // Smaller font size on mobile, larger on bigger screens
        }}
      >
        Inspirational Homepage
      </Typography>
    </Box>
  );
};

export default Header;
