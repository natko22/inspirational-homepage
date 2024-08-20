import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { setQuote } from "../../features/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.data);

  const updateQuote = () => {
    const newQuote = {
      content: "Stay positive, work hard, make it happen.",
      author: "Unknown",
    };
    dispatch(setQuote(newQuote));
  };

  if (!quote || !quote.content) {
    return <Typography variant="h6">Loading quote...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#CFE0C3", padding: 2, borderRadius: 2 }}>
      <Typography variant="h5" component="div" sx={{ color: "#1F363D" }}>
        Inspirational Quote
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontStyle: "italic", color: "#70A9A1" }}
      >
        "{quote.content}" - <em>{quote.author}</em>
      </Typography>
      <Button
        variant="contained"
        onClick={updateQuote}
        sx={{ marginTop: 2, backgroundColor: "#40798C", color: "#fff" }}
      >
        Update Quote
      </Button>
    </Box>
  );
};

export default Quote;
