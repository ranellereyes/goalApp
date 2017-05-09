import React from 'react';
import StepListItemContainer from './step_list_item_container';

const stepList = ({ steps, todo_id, receiveStep }) => (
  <div>
    <ul>
      {steps.map(step => (
        <StepListItemContainer />
      ))}
    </ul>
    <StepForm
      receiveStep={receiveStep}
      todoId={todo_id} />
  </div>
);

export default stepList;
