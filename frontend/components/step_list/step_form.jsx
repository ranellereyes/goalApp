import React from 'react';
import Util from '../../util';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveStep({
      id: Util.date(),
      title: this.state.title,
      done: false,
      todo_id: this.props.todo_id
    });
    this.setState({title: ''});
  }

  render() {
    return (
      <form>
        <input
          onChange={this.updateTitle}
          value={this.state.title} />
        <input type="submit"
          value="Add Step"
          onClick={this.handleSubmit} />
      </form>
    );
  }
}
