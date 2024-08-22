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
    return <CircularProgress sx={{ color: "#FFFFFF" }} />;
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
      <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
        No quote available
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 2,
        borderRadius: 2,
        marginTop: "10rem",
      }}
    >
      <Typography variant="h5" component="div" sx={{ color: "#FFFFFF" }}>
        "{quote.content}" - <em>{quote.author}</em>
      </Typography>
      <Button
        className="quote-button"
        variant="contained"
        onClick={updateQuote}
      >
        New Quote
      </Button>
    </Box>
  );
};

export default Quote;
