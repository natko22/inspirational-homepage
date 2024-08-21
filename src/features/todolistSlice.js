import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const getRandomColor = () => {
  const colors = ["#1F363D", "#40798C", "#70A9A1", "#9EC1A3", "#CFE0C3"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const todolistSlice = createSlice({
  name: "goals",
  initialState: [],
  reducers: {
    addGoal: (state, action) => {
      state.push({
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
        color: getRandomColor(), // Assign color once when the goal is created
      });
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

export const { addGoal, removeGoal, toggleGoal } = todolistSlice.actions;

export default todolistSlice.reducer;
