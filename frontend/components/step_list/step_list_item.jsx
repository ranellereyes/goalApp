import React from 'react';

const StepListItem = ({step, removeStep, receiveStep}) => (
  <li>
    {step.title}<br />
  <button onClick={removeStep(step.id)}>REMOVE!</button>
    <button onClick={receiveStep({
        id: step.id,
        title: step.title,
        done: !step.done,
        todo_id: step.todo_id
      })}>{step.done ? 'Undo' : 'Complete'}</button>
  </li>
);
