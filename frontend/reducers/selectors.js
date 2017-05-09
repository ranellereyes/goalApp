export const allTodos = (state) => {
  return Object.keys(state.todos).map(key => state.todos[key]);
};

export const stepsByTodoId = (state, id) => {
  const filteredSteps = {};
  Object.keys(state.steps).forEach(key => {
    if (state.steps[key].todo_id === id) {
      filteredSteps[key] = state.steps[key];
    }
  });
  return filteredSteps;
};
