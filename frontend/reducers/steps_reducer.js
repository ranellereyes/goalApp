import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";
import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSteps = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newSteps[step.id] = step;
      });
      return newSteps;
    case RECEIVE_STEP:
      newSteps = merge({}, state);
      newSteps[action.step.id] = action.step;
      return newSteps;
    case REMOVE_STEP:
      Object.keys(state).forEach(key => {
        if(action.step.id != state[key].id) {
          newSteps[state[key].id] = state[key];
        }
      });
      return newSteps;
    default:
      return state;
  }
};

export default stepsReducer;
