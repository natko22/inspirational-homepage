import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch a random quote with parameters
export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async ({ tags, limit = 1, minLength, maxLength } = {}) => {
    const API_URL = "https://api.quotable.io/quotes/random";

    // Construct the query parameters
    let query = `?limit=${limit}`;
    if (tags) query += `&tags=${tags}`;
    if (minLength) query += `&minLength=${minLength}`;
    if (maxLength) query += `&maxLength=${maxLength}`;

    const response = await fetch(API_URL + query);
    const json = await response.json();
    return json[0];
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
