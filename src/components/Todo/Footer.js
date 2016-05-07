import React, {PropTypes} from 'react';
import shallowEqual from 'helpers/shallowEqual';
export default class Footer extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return shallowEqual(this.props.todo.get('filter'), nextProps.todo.get('filter'));
  }
  handleSelect = (filter)=> {
    this.props.todoBoundAC.toggleFilter(filter);
  }
  render() {
    console.log('footer renderd');
    const filter = this.props.todo.get('filter');
    const listSize = this.props.todo.get('todoList').toArray().filter((obj)=>{
      return this.props.todo.get('filter') === 'All' ? true : obj.get('status') === this.props.todo.get('filter');
    }).length;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{listSize}</strong> {listSize === 1 ? 'item' : 'items'}
        </span>
        <ul className="filters">
          <li>
            <a onClick={this.handleSelect.bind(null, 'All')} className={filter === 'All' ? 'selected' : ''}>All</a>
          </li>
          <li>
            <a onClick={this.handleSelect.bind(null, 'Active')} className={filter === 'Active' ? 'selected' : ''}>Active</a>
          </li>
          <li>
            <a onClick={this.handleSelect.bind(null, 'Completed')} className={filter === 'Completed' ? 'selected' : ''}>Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}
