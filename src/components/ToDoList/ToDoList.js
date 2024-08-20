// src/components/ToDoList/ToDoList.js
import React, { useState } from "react";
import mockTodoListData from "../../mockData/todoList";

const ToDoList = () => {
  const [todos, setTodos] = useState(mockTodoListData);

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Today's Goals</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
