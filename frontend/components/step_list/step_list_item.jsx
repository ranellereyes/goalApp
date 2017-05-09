import React from 'react';

const StepListItem = ({step, removeStep, receiveStep}) => {
  return (
    <li>
      {step.title}<br />
    <button onClick={() => {removeStep(step);}}>REMOVE!</button>
      <button onClick={() => {receiveStep({
          id: step.id,
          title: step.title,
          done: !step.done,
          todoId: step.todoId
        });}}>{step.done ? 'Undo' : 'Complete'}</button>
    </li>
  );
};

export default StepListItem;
