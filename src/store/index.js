import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import imageReducer from "../features/imageSlice";
import quoteReducer from "../features/quoteSlice";
import goalsReducer from "../features/goalsSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    image: imageReducer,
    quote: quoteReducer,
    goals: goalsReducer,
  },
});

export default store;
