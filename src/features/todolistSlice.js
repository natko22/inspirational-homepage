import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const goalsSlice = createSlice({
  name: "goals",
  initialState: [],
  reducers: {
    addGoal: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload.text, completed: false });
    },
    removeGoal: (state, action) => {
      return state.filter((goal) => goal.id !== action.payload);
    },
    toggleGoal: (state, action) => {
      const goal = state.find((goal) => goal.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
      }
    },
  },
});

export const { addGoal, removeGoal, toggleGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
