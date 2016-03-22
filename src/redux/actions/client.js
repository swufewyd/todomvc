import * as ActionTypes from '../constants/constants';
import HttpRequest from 'superagent';
export function loadClientInfo() {
  return dispatch => {
    HttpRequest.get('/api/client/info')
      .end((err, resp)=>{
        if (resp.ok) {
          dispatch({
            type: ActionTypes.CLIENT_INFO_2,
            data: resp.body
          });
        }
      });
  };
}
export function checkLogin(params) {
  return dispatch => {
    HttpRequest.post('/api/client/login')
      .send(params)
      .end((err, resp)=>{
        dispatch({
          type: ActionTypes.CLIENT_INFO,
          data: resp.body
        });
      });
  };
}
