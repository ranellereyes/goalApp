import React from "react";
import StepListContainer from '../step_list/step_list_container';

const TodoDetailView = ({removeTodo, todo}) => (
  <div>
    <p>{todo.body}</p>
    <button onClick={() => {removeTodo(todo);}}>DELETE!</button>
    <StepListContainer
      id={todo.id} />
  </div>
);

export default TodoDetailView;
