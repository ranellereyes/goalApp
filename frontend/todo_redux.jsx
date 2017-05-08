import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store';
import { receiveTodo, receiveTodos } from './actions';

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root />,
    document.getElementById("root")
  );
});
