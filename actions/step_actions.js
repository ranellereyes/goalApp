import * as StepAPIUtil from "../util/step_api_util";
import { receiveErrors, clearErrors } from './errors_actions';


export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const fetchSteps = () => dispatch => (
  StepAPIUtil.fetchSteps().then(res => dispatch(receiveSteps(res)))
);

export const createStep = step => dispatch => (
  StepAPIUtil.createStep(step)
    .then(res => dispatch(receiveStep(res)),
      err => dispatch(receiveErrors(err)))
      .then(() => dispatch(clearErrors()))
);

export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step)
    .then(res => dispatch(receiveStep(res)),
      err => dispatch(receiveErrors(err)))
      .then(() => dispatch(clearErrors()))
);

export const deleteStep = step => dispatch => (
  StepAPIUtil.deleteStep(step)
    .then(res => dispatch(removeStep(res)),
      err => dispatch(receiveErrors(err)))
      .then(() => dispatch(clearErrors()))
);
