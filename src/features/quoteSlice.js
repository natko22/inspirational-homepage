import { createSlice } from "@reduxjs/toolkit";
import mockQuoteData from "../mockData/quotes";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: mockQuoteData || { content: "", author: "" },
    status: "idle",
  },
  reducers: {
    setQuote: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setQuote, setStatus } = quoteSlice.actions;
export default quoteSlice.reducer;
