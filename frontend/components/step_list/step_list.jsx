import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const stepList = ({ steps, todoId, receiveStep }) => {
  let items;

  if(Object.keys(steps).length > 0) {
    items = Object.keys(steps).map((step, i) => (
      <StepListItemContainer
        key={i}
        step={steps[step]} />
    ));
  } else {
    items = '';
  }

  return (
    <div>
      <ul>
        {items}
      </ul>
      <StepForm
        receiveStep={receiveStep}
        todoId={todoId} />
    </div>
  );
};

export default stepList;
