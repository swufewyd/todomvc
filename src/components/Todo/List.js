import React, {PropTypes} from 'react';
import Item from './Item';
export default class List extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  handleToggleAll = () =>{
    this.props.todoBoundAC.toggleAllStatus(this.props.todo.get('todoList'));
  }
  render() {
    // console.log('List', this.props.todo.get('todoList').toJS());
    const todoList = this.props.todo.get('todoList').toArray().filter((obj)=>{
      return this.props.todo.get('filter') === 'All' ? true : obj.get('status') === this.props.todo.get('filter');
    });
    return (
      <section className="main">
        <input onChange={this.handleToggleAll} type="checkbox" className="toggle-all" style={{display: 'inline'}} />
          <ul className="todo-list">
            {
              todoList.map((item)=>{
                return <Item {...this.props} item={item} />;
              })
            }
          </ul>
      </section>
    );
  }
}
