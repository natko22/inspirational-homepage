import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal, removeGoal, toggleGoal } from "../../features/todolistSlice";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Confetti from "react-confetti";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  const handleAddGoal = () => {
    if (input.trim()) {
      dispatch(addGoal({ text: input.trim() }));
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddGoal();
    }
  };

  const handleToggleGoal = (id) => {
    dispatch(toggleGoal(id));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const handleRemoveGoal = (id) => {
    dispatch(removeGoal(id));
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.302)",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        width: { xs: "80%", md: "90%" },

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {showConfetti && <Confetti />}
      <h2 style={{ color: "black", fontWeight: "400" }}>Today's Goals</h2>
      <TextField
        label="Write your goal"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontSize: "1.2rem",
          },
        }}
        InputProps={{
          style: { color: "black", fontSize: "1.5rem", padding: "15px" },
          sx: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "#FFFFFF", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              boxShadow: "none",
            },
          },
        }}
        style={{ marginBottom: "10px" }}
      />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E0E1DD",
            color: "black",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#D1D3CF",
              transform: "scale(1.05)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            },
            "&:active": {
              transform: "scale(0.98)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
          onClick={handleAddGoal}
        >
          Add Goal
        </Button>
      </Box>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {goals.map((goal) => (
          <ListItem
            key={goal.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.392)",
              textDecoration: goal.completed ? "line-through" : "none",
              color: "black",
              padding: "10px",
              margin: "5px",
              borderRadius: "8px",
              flex: "1 1 30%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary={goal.text} />
            <div>
              <IconButton
                onClick={() => handleToggleGoal(goal.id)}
                sx={{ color: "black" }}
              >
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton
                onClick={() => handleRemoveGoal(goal.id)}
                sx={{ color: "black" }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </div>
    </Box>
  );
};

export default ToDoList;
