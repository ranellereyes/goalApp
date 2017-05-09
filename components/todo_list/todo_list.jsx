import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from "./todo_form";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todos = this.props.todos;
    const createTodo = this.props.createTodo;
    const updateTodo = this.props.updateTodo;
    const errors = this.props.errors;

    return (
      <div>
        <ul>
          {todos.map((todo, idx) => {
            return (
            <TodoListItem
              key={idx}
              todo={todo}
              updateTodo={updateTodo} >
            </TodoListItem>
              );
            }
          )}
        </ul>

        <TodoForm
          createTodo={createTodo}
          errors={errors} />
      </div>
    );
  }
}

export default TodoList;
