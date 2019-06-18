// Action types
export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// Constants

// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_COMPLETED: "SHOW_COMPLETED",
//   SHOW_ACTIVE: "SHOW_ACTIVE"
// };

// Tutorial
// Action Creators

// export const addTodo = text => {
//   return {
//     type: ADD_TODO,
//     text: text
//   };
// };

// export const toggleTodo = index => {
//   return {
//     type: TOGGLE_TODO,
//     index: index
//   };
// };

// export const setVisibilityFilter = filter => {
//   return {
//     type: SET_VISIBILITY_FILTER,
//     filter: filter
//   };
// };

export const addTodo = todo => {
  console.log("AddTodo todo", todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};
