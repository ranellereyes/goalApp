import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

// const initialState = {};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newTodos = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo, idx) => {
        newTodos[todo.idx] = todo;
      });
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
