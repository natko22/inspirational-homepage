import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import imageReducer from "./imageSlice";
import quoteReducer from "./quoteSlice";
import goalsReducer from "./goalsSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    image: imageReducer,
    quote: quoteReducer,
    goals: goalsReducer,
  },
});

export default store;
