import * as ActionTypes from '../constants/constants';
import HttpRequest from 'superagent';
export function changeValue(value) {
  return dispatch => {
    HttpRequest.get('/api/client/info')
      .end(()=>{
        dispatch({
          type: ActionTypes.TEST,
          data: value
        });
      });
  };
}

export function setInput(value) {
  return dispatch => {
    HttpRequest.get('/api/client/info')
      .end(()=>{
        dispatch({
          type: ActionTypes.SET_INPUT,
          data: value
        });
      });
  };
}
