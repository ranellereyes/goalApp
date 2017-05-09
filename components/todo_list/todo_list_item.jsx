import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: false,
    };

    this.toggleView = this.toggleView.bind(this);
    this.todoView = this.todoView.bind(this);
  }

  toggleView(e) {
    e.preventDefault();
    this.setState({details: this.state.details ? false : true});
  }

  render() {
    const title = this.props.todo.title;
    let done = this.props.todo.done;
    const todo = this.props.todo;

    return (
        <li>
        <span onClick={this.toggleView}>{title}</span>
        <br/>
        <button onClick={() => {
              todo.done = done ? false : true;
              this.props.updateTodo(todo);
            }
          }>{done ? 'Undo' : 'Complete'}</button>
        {this.todoView()}
      </li>
    );
  }

  todoView() {
    if(this.state.details) {
      return (
        <TodoDetailViewContainer
            todo={this.props.todo} />
      );
    } else {
      return '';
    }
  }
}

export default TodoListItem;
