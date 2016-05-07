import React, {PropTypes} from 'react';

export default class Header extends React.Component {
  static propTypes = {
    todoBoundAC: PropTypes.object,
    todo: PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  handleSubmit = (evt)=>{
    evt.preventDefault();
    this.props.todoBoundAC.addTodo({
      text: this.props.todo.get('currentInput'),
      status: 'Active'
    });
    this.props.todoBoundAC.setCurrent('');
  }
  handleChange = (evt)=>{
    this.props.todoBoundAC.setCurrent(evt.target.value);
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={this.props.todo.get('currentInput')}
          />
        </form>
      </header>
    );
  }
}
