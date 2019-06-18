import React from "react";
import { connect } from "react-redux";
import { toggleTodo, clearTodo } from "../actions/index";

const Todo = props => {
  console.log("Todo props", props);
  return (
    <div className="todo-card">
      <ul>
        <li onClick={event => props.toggleTodo(props.todo.id)}>
          {props.todo.todo}
        </li>
      </ul>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo }
)(Todo);
