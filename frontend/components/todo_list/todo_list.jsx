import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from "./todo_form";

const TodoList = ({ todos, receiveTodo, removeTodo }) => (
  <div>
    <ul>
      {todos.map((todo, idx) => (
        <TodoListItem
          key={idx}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={receiveTodo} >
        </TodoListItem>
      ))}
    </ul>

    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
