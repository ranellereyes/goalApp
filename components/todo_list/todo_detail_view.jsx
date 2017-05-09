import React from "react";
import StepListContainer from '../step_list/step_list_container';

const TodoDetailView = ({deleteTodo, todo}) => (
  <div>
    <p>{todo.body}</p>
    <button onClick={() => {deleteTodo(todo);}}>DELETE!</button>
    <StepListContainer
      id={todo.id} />
  </div>
);

export default TodoDetailView;
