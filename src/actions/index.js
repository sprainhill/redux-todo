export const selectTodo = todo => {
  return {
    type: "SELECTED_TODO",
    payload: todo
  };
};
