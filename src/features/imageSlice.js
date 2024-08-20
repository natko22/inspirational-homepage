import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setImage(state, action) {
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

export const { setImage, setLoading, setError } = imageSlice.actions;
export default imageSlice.reducer;
