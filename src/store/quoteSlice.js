import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setQuote(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setQuote, setLoading, setError } = quoteSlice.actions;
export default quoteSlice.reducer;
