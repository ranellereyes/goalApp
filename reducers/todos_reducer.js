import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';


const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newTodos = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newTodos[todo.id] = todo;
      });
      console.log('in Todos reducer:', newTodos);
      return newTodos;
    case RECEIVE_TODO:
      newTodos = merge({}, state);
      newTodos[action.todo.id] = action.todo;
      return newTodos;
    case REMOVE_TODO:
      Object.keys(state).forEach(key => {
        if(action.todo.id != state[key].id) {
          newTodos[state[key].id] = state[key];
        }
      });
      return newTodos;
    default:
      return state;
  }
};

export default todosReducer;
