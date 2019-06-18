import React from "react";
import { connect } from "react-redux";

const Todo = props => {
  console.log("Todo props", props);
  return (
    <div className="todo-card">
      <ul>
        <li>{props.todo.todo}</li>
      </ul>
    </div>
  );
};

export default connect(
  null,
  {}
)(Todo);
