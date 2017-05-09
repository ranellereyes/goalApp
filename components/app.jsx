import store from '../store/store';
import { Provider } from 'react-redux';
import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => (
  <TodoListContainer />
);

export default App;
