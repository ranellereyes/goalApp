import { connect } from "react-redux";
import { receiveStep } from "../../actions/step_actions";
import StepList from "./step_list";
import { stepsByTodoId } from "../../reducers/selectors";

const mapStateToProps = (state, id) => ({
  steps: stepsByTodoId(state, id),
  todoId: id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
