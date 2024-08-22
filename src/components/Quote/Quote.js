import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { fetchQuote } from "../../features/quoteSlice";
import "./Quote.css";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.data);
  const status = useSelector((state) => state.quote.status);
  const error = useSelector((state) => state.quote.error);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const updateQuote = () => {
    dispatch(fetchQuote());
  };

  if (status === "loading") {
    return <CircularProgress sx={{ color: "black" }} />;
  }

  if (status === "failed") {
    return (
      <Typography variant="h6" color="error">
        Error: {error}
      </Typography>
    );
  }

  if (!quote) {
    return (
      <Typography variant="h6" sx={{ color: "black" }}>
        No quote available
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        width: { xs: "73%", md: "80%" },
        padding: 5,
        borderRadius: 2,
        marginTop: "3rem",
        marginLeft: -1,
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "180px",
        maxHeight: "180px",
        transition: "background-color 0.3s ease",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "black", textAlign: "center" }}
      >
        "{quote.content}" - <em>{quote.author}</em>
      </Typography>
      <Button
        className="quote-button"
        variant="contained"
        onClick={updateQuote}
        sx={{
          backgroundColor: "#E0E1DD",
          color: "black",
          marginTop: "1rem",

          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#D1D3CF",
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
          "&:active": {
            transform: "scale(0.98)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        New Quote
      </Button>
    </Box>
  );
};

export default Quote;
