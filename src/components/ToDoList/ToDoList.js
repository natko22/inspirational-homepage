import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal, removeGoal, toggleGoal } from "../../features/todolistSlice";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
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
    setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
  };

  const handleRemoveGoal = (id) => {
    dispatch(removeGoal(id));
  };

  const getRandomColor = () => {
    const colors = ["#1F363D", "#40798C", "#70A9A1", "#9EC1A3", "#CFE0C3"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {showConfetti && <Confetti />}
      <h2>Today's Goals</h2>
      <TextField
        label="Write your goal"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        fullWidth
        style={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddGoal}
        style={{ marginBottom: "20px" }}
      >
        Add Goal
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {goals.map((goal) => (
          <ListItem
            key={goal.id}
            style={{
              backgroundColor: getRandomColor(),
              textDecoration: goal.completed ? "line-through" : "none",
              color: "#FFFFFF",
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
                color="inherit"
              >
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton
                onClick={() => handleRemoveGoal(goal.id)}
                color="inherit"
              >
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
