import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class stepList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSteps();
  }

  render() {
    let items;

    const steps = this.props.steps;
    const todoId = this.props.todoId;
    const createStep = this.props.createStep;

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
          createStep={createStep}
          todoId={todoId} />
      </div>
    );
  }
}

export default stepList;
