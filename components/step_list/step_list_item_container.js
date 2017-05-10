import { connect } from "react-redux";
import { removeStep, receiveStep, updateStep, deleteStep } from "../../actions/step_actions";
import StepListItem from "./step_list_item";
// import { stepsByTodoId } from "../../reducers/selectors";

const mapDispatchToProps = dispatch => ({
  deleteStep: (step) => dispatch(deleteStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step)),
  updateStep: (step) => dispatch(updateStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
