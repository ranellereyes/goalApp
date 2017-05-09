import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions';
import { stepsByTodoId, allTodos } from './reducers/selectors';

window.store = store;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.removeStep = removeStep;
window.stepsByTodoId = stepsByTodoId;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root />,
    document.getElementById("root")
  );
});
