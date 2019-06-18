import { ADD_TODO, TOGGLE_TODO, CLEAR_TODO } from "../actions/index";

// This reducer will handle our two action cases of adding a todo, and toggling that todo complete on a click.
// It will receive the state of our redux store, and an
// action object created by our action creator depending on the input from the user.

const initialState = {
  todos: [
    {
      todo: "Learn Redux",
      completed: false,
      id: 1
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("reducer action", action);
  switch (action.type) {
    case ADD_TODO:
      console.log("ADD_TODO action.payload", action.payload);
      const newTodo = {
        todo: action.payload,
        completed: false,
        id: state.todos[state.todos.length - 1].id + 1
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case CLEAR_TODO:
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
