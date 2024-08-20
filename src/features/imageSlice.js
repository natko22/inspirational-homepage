import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch images based on a query
export const fetchImages = createAsyncThunk(
  "image/fetchImages",
  async (query) => {
    const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    console.log("Unsplash Access Key:", ACCESS_KEY); // This should log your actual key

    const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}`;

    const response = await fetch(API_URL);
    const json = await response.json();
    return json.results;
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default imageSlice.reducer;
