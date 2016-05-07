import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
import __findIndex from 'lodash/findIndex';
const initState = {
  todoList: [],
  currentInput: '',
  filter: 'All'
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.INIT_TODO:
      return state.set('todoList', fromJS(action.data));
    case ActionTypes.SET_CURRENT:
      return state.updateIn(['currentInput'], () => action.data);
    case ActionTypes.ADD_TODO:
      return state.updateIn(['todoList'], val => val.push(fromJS(action.data)));
    case ActionTypes.DEL_TODO:
      const idx1 = __findIndex(state.get('todoList').toJS(), {id: action.data});
      return state.deleteIn(['todoList', idx1]);
    case ActionTypes.TOGGLE_STATUS:
      const idx2 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx2], () => fromJS(action.data));
    case ActionTypes.TOGGLE_FILTER:
      return state.updateIn(['filter'], () => action.data);
    case ActionTypes.TOGGLE_ALL:
      return state.updateIn(['todoList'], () => fromJS(action.data));
    case ActionTypes.TOGGLE_EDIT:
      const idx3 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx3], (val) => val.mergeDeep(fromJS({canEdit: action.data.canEdit === 1 ? 0 : 1})));
    case ActionTypes.MODIFY_TODO:
      const idx4 = __findIndex(state.get('todoList').toJS(), {id: action.data.id});
      return state.updateIn(['todoList', idx4], (val) => val.mergeDeep(fromJS({text: action.data.text})));
    default:
      return state;
  }
}
