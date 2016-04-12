import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';

export default function(state = fromJS({A: {text: 'my name is A'}, B: {text: 'my name is B'}}), action) {
  switch (action.type) {
    case ActionTypes.TEST:
      return state.updateIn(['A', 'text'], ()=> 'my new name is' + action.data);
      // return fromJS({A: {text: 'my name is ll'}, B: {text: 'my name is B'}});
    case ActionTypes.SET_INPUT:
      return state.updateIn(['B', 'text'], ()=> action.data);
    default:
      return state;
  }
}
