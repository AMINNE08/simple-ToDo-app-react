import React from "react";
import TaskList from "./TaskList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;
