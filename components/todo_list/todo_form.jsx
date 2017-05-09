import React from 'react';
import Util from '../../util/util';


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
    this.props.createTodo({title: this.state.title, body: this.state.body})
      .then(() => this.setState({title: '', body: ''}));
  }

  render() {
    const errors = this.props.errors;

    return (
      <form>
        {errors.length > 0 ? errors.map((error, i) => <li key={i}>{error}</li>) : ''}

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
