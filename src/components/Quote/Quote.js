import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { fetchQuote } from "../../features/quoteSlice";

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
    return <CircularProgress />;
  }

  if (status === "failed") {
    return (
      <Typography variant="h6" color="error">
        Error: {error}
      </Typography>
    );
  }

  if (!quote) {
    return <Typography variant="h6">No quote available</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#CFE0C3", padding: 2, borderRadius: 2 }}>
      <Typography variant="h5" component="div" sx={{ color: "#1F363D" }}>
        "{quote.content}" - <em>{quote.author}</em>
      </Typography>
      <Button
        variant="contained"
        onClick={updateQuote}
        sx={{ marginTop: 2, backgroundColor: "#40798C", color: "#fff" }}
      >
        New Quote
      </Button>
    </Box>
  );
};

export default Quote;
