import { createSlice } from "@reduxjs/toolkit";
import mockWeatherData from "../mockData/weather";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: mockWeatherData || {
      name: "",
      weather: [{ description: "" }],
      main: { temp: 0 },
    },
    status: "idle",
  },
  reducers: {
    setWeather: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setWeather, setStatus } = weatherSlice.actions;
export default weatherSlice.reducer;
