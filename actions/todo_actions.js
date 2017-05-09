import * as TodoAPIUtil from "../util/todo_api_util";
import { receiveErrors, clearErrors } from "./errors_actions";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo)
    .then(res => dispatch(receiveTodo(res)),
    err => dispatch(receiveErrors(err.responseJSON)))
      .then(() => dispatch(clearErrors()))
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo)
  .then(res => dispatch(receiveTodo(res)),
  err => dispatch(receiveErrors(err.responseJSON)))
    .then(() => dispatch(clearErrors()))
);

export const deleteTodo = todo => dispatch => (
  TodoAPIUtil.deleteTodo(todo)
  .then(res => dispatch(removeTodo(res)),
  err => dispatch(receiveErrors(err.responseJSON)))
    .then(() => dispatch(clearErrors()))
);
