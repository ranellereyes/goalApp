import React from "react";

const TodoListItem = ({todo, removeTodo, updateTodo}) => (
  <li>
    id: {todo.id}
    <br />
    Title: {todo.title}
    <br/>
    Body: {todo.body}
    <br/>
    Done: {`${todo.done}`}
    <br />
    <button onClick={() => removeTodo(todo)}>Remove</button>
    <button onClick={() => {
          todo.done = todo.done ? false : true;
          updateTodo(todo);
        }
      }>Update</button>

  </li>
);

export default TodoListItem;
