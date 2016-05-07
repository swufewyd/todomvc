import React, {PropTypes} from 'react';
import shallowEqual from 'helpers/shallowEqual';

export default class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return shallowEqual(this.props.item, nextProps.item);
  }
  handleDone = ()=>{
    this.props.todoBoundAC.toggleItemStatus(this.props.item);
  }
  handleDestroy = (id) => {
    this.props.todoBoundAC.delTodo(id);
  }
  toggleEdit = ()=> {
    this.props.todoBoundAC.toggleEdit(this.props.item);
  }
  handleChange = (evt)=>{
    this.props.todoBoundAC.modifyTodo(this.props.item, evt.target.value);
  }
  handleEditDone = (evt)=>{
    if (evt.keyCode === 13) {
      this.props.todoBoundAC.toggleEdit(this.props.item);
    }
  }
  render() {
    console.log('item renderd');
    const {id, status, text, canEdit} = this.props.item.toObject();
    return (
      <li className={status === 'Completed' ? 'completed' : ''} style={{height: '60px', opacity: '1'}}>
        <div className="view">
          <input onChange={this.handleDone} type="checkbox" className="toggle" checked={status === 'Completed' ? true : false} />
          {
            canEdit === 0 ?
            <label onDoubleClick={this.toggleEdit}>{text}</label> :
            <input
              autoFocus
              className="new-todo"
              onChange={this.handleChange}
              onKeyUp={this.handleEditDone}
              value={text}
            />
          }
            <button onClick={this.handleDestroy.bind(null, id)} className="destroy"></button>
        </div>
      </li>
    );
  }
}
