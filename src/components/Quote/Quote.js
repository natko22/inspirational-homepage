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
        width: "80%",
        padding: 5,
        borderRadius: 2,
        marginTop: "3rem",
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100px",
      }}
    >
      <Typography
        variant="h5"
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
          backgroundColor: "#808080",
          color: "black",
          marginTop: "1rem",
          "&:hover": {
            backgroundColor: "#696969",
          },
        }}
      >
        New Quote
      </Button>
    </Box>
  );
};

export default Quote;
