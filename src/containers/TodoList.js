import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, clearTodo } from "../actions/index";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    newTodo: ""
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("TodoList this.props", this.props);
    // console.log("TodoList this.handleChanges", this.handleChanges);
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => {
          return (
            <Todo todo={todo} key={todo.id} toggleTodo={this.toggleTodo} />
          );
        })}
        <form className="todo-form">
          <input
            type="text"
            placeholder="todo here"
            value={this.state.newTodo}
            name="newTodo"
            onChange={this.handleChanges}
          />
          <button className="btn" onClick={this.addTodo}>
            Add Todo
          </button>
          <button
            className="btn"
            onClick={event => this.props.clearTodo(event)}
          >
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, clearTodo }
)(TodoList);
