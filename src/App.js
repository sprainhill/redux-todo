import React from "react";
import "./App.css";
import TodoList from "./containers/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Rory's Redux Todo</h1>
      <TodoList />
      {/* <TodoForm /> */}
    </div>
  );
}

export default App;
