import * as ActionTypes from '../constants/constants';
// import Immutable from 'immutable';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.CLIENT_INFO:
      return {...state, info: action.data};
    default:
      return state;
  }
}
