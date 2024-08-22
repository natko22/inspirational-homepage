import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../features/imageSlice";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

const BackgroundImage = ({ setBackgroundImage }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.data || []);
  const status = useSelector((state) => state.image.status);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      console.log("Fetching initial images with default query...");
      dispatch(fetchImages("moon"));
      setInitialLoad(false);
    }
  }, [dispatch, initialLoad]);

  useEffect(() => {
    if (images.length > 0) {
      console.log("Initial background image set:", images[0]?.urls?.regular);
      setBackgroundImage(images[0]?.urls?.regular);
    } else if (status !== "loading") {
      console.log("No images found. Setting fallback background.");
      setBackgroundImage(
        "https://via.placeholder.com/1920x1080?text=Loading+Image"
      );
    }
  }, [images, setBackgroundImage, status]);

  const changeBackground = () => {
    if (images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      console.log("Changing background to:", images[nextIndex]?.urls?.regular);
      setCurrentIndex(nextIndex);
      setBackgroundImage(images[nextIndex]?.urls?.regular || "");
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchQuery = query.trim() === "" ? "moon" : query;
    dispatch(fetchImages(searchQuery));
    setCurrentIndex(0);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        marginTop: { xs: "10rem", md: "4rem" },
        width: { xs: "82%", md: "92%" },
        minHeight: "220px",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" color="black" mb={2} textAlign="center">
        Change the Background
      </Typography>
      <TextField
        variant="outlined"
        value={query}
        onChange={handleQueryChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for images..."
        fullWidth
        sx={{
          backgroundColor: "transparent",
          input: { color: "black" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
          mb: 2,
        }}
      />
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={changeBackground}
          sx={{
            backgroundColor: "#E0E1DD",
            color: "black",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#D1D3CF", // Slightly darker shade on hover
              transform: "scale(1.05)", // Slightly scale up the button on hover
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Add shadow on hover
            },
            "&:active": {
              transform: "scale(0.98)", // Slightly scale down when clicked
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Reduce shadow on click
            },
          }}
          disabled={images.length === 0}
        >
          Change Background
        </Button>
      </Box>
      {status === "loading" && (
        <CircularProgress sx={{ mt: 2, color: "black" }} />
      )}
      {status === "failed" && (
        <Typography variant="body2" color="error" mt={2}>
          Error loading images.
        </Typography>
      )}
    </Box>
  );
};

export default BackgroundImage;
