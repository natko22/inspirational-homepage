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
    // Fetch images on component mount with the default query ("nature")
    if (initialLoad) {
      console.log("Fetching initial images with default query...");
      dispatch(fetchImages("nature"));
      setInitialLoad(false);
    }
  }, [dispatch, initialLoad]);

  useEffect(() => {
    // Set the first image as the background when images are loaded
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
    // Use the default query if the input is empty
    const searchQuery = query.trim() === "" ? "nature" : query;
    dispatch(fetchImages(searchQuery));
    setCurrentIndex(0); // Reset index when a new search is performed
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
        justifyContent: "flex-end",
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        marginTop: "19rem",
        width: "92%",
        minHeight: "180px",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" color="black" mb={2}>
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
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          onClick={changeBackground}
          sx={{
            backgroundColor: "#808080",
            color: "black",
            "&:hover": {
              backgroundColor: "#696969",
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
