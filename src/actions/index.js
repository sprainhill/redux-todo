// Action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const addTodo = todo => {
  console.log("AddTodo todo", todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = index => {
  console.log("toggleTodo index", index);
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};

export const clearTodo = event => {
  console.log("clearTodo event", event);
  event.preventDefault();
  return {
    type: CLEAR_TODO
  };
};
