import { ADD_TODO } from "../actions/index";
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from "../actions";

// Todo tutorial

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// };

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           };
//         }
//         return todo;
//       });
//     default:
//       return state;
//   }
// }

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {
//         ...state,
//         visibilityFilter: action.filter
//       };
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return {
//               ...todo,
//               completed: !todo.completed
//             };
//           }
//           return todo;
//         })
//       };
//     default:
//       return state;
//   }
// }

// This reducer will handle our one action case of adding a todo.
// It will receive the state of our redux store, and an
// action object created by our action creator.

const initialState = {
  todos: [{ todo: "Learn Redux" }]
};

export const reducer = (state = initialState, action) => {
  console.log("reducer action", action);
  switch (action.type) {
    case ADD_TODO:
      console.log("ADD_TODO action.payload", action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    // break;
    default:
      return state;
  }
};

// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   todos: TodosReducer,
//   activeTodo: ActiveTodo
// });

// export default rootReducer;

// Sample state

// const sampleState = {
//   visibilityFilter: "SHOW_ALL",
//   todos: [
//     {
//       text: "Do Redux Todo tutorial",
//       completed: true
//     },
//     {
//       text: "Keep all state in a single tree",
//       completed: false
//     }
//   ]
// };
