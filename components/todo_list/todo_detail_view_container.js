import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
import { deleteTodo } from "../../actions/todo_actions";
// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
