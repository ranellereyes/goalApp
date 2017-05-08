import React from 'react';
import Util from '../../util';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    e.preventDefault();
    if(e.target.id==='title') {
      this.setState({title: e.target.value});
    } else {
      this.setState({body: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const date = Util.date();
    this.props.receiveTodo({
      id: date,
      title: this.state.title,
      body: this.state.body,
      done: false
    });

    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form>
        <label>Title</label>
        <input
          id='title'
          value={this.state.title}
          onChange={this.update}></input>
        <br />

        <label>Body</label>
        <input
          id='body'
          value={this.state.body}
          onChange={this.update}></input>
        <br />

        <input
          type='submit'
          value='Add Todo'
          onClick={this.handleSubmit}></input>
      </form>
    );
  }
}

export default TodoForm;
