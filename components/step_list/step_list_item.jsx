import React from 'react';

const StepListItem = ({step, deleteStep, receiveStep, updateStep}) => {
  return (
    <li>
      {step.title}<br />
    <button onClick={() => {deleteStep(step);}}>REMOVE!</button>
      <button onClick={() => {updateStep({
          id: step.id,
          title: step.title,
          done: !step.done,
          todoId: step.todoId
        });}}>{step.done ? 'Undo' : 'Complete'}</button>
    </li>
  );
};

export default StepListItem;
