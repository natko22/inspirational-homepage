import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setGoal(state, action) {
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

export const { setGoal, setLoading, setError } = goalSlice.actions;
export default goalSlice.reducer;
