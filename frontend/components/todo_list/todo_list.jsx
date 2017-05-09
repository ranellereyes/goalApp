import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from "./todo_form";

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      {todos.map((todo, idx) => {
        return (
        <TodoListItem
          key={idx}
          todo={todo}
          updateTodo={receiveTodo} >
        </TodoListItem>
          );
        }
      )}
    </ul>

    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
