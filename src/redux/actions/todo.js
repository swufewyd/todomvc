import * as ActionTypes from '../constants/constants';
import HttpRequest from 'superagent';
import __every from 'lodash/every';
import {fromJS} from 'immutable';
export function getAll() {
  return dispatch => {
    HttpRequest.get('/api/todo')
      .end((err, resp)=>{
        resp.body.map((obj)=>{
          obj.canEdit = 0;
        });
        dispatch({
          type: ActionTypes.INIT_TODO,
          data: resp.body
        });
      });
  };
}

export function addTodo(params) {
  return dispatch => {
    HttpRequest.post('/api/todo')
      .send(params)
      .end((err, resp)=>{
        resp.body.canEdit = 0;
        dispatch({
          type: ActionTypes.ADD_TODO,
          data: resp.body
        });
      });
  };
}

export function delTodo(id) {
  return dispatch => {
    HttpRequest.del(`/api/todo/${id}`)
      .end(()=>{
        dispatch({
          type: ActionTypes.DEL_TODO,
          data: id
        });
      });
  };
}

export function setCurrent(value) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SET_CURRENT,
      data: value
    });
  };
}

export function toggleItemStatus(item) {
  const {id, status, canEdit} = item.toObject();
  const url = (status === 'Completed' ? `/api/todo/item/${id}/active` : `/api/todo/item/${id}/completed`);
  return dispatch => {
    HttpRequest.put(url)
      .end((err, resp)=>{
        resp.body.canEdit = canEdit;
        dispatch({
          type: ActionTypes.TOGGLE_STATUS,
          data: resp.body
        });
      });
  };
}
export function toggleAllStatus(list) {
  const listData = list.toJS();
  const allDone = __every(listData, {status: 'Completed'});
  listData.map((obj)=>{
    obj.status = allDone ? 'Active' : 'Completed';
  });
  const param = allDone ? {status: 'Active'} : {status: 'Completed'};
  return dispatch => {
    HttpRequest.put(`/api/todo/multiStatus`)
      .send(param)
      .end(()=>{
        dispatch({
          type: ActionTypes.TOGGLE_ALL,
          data: listData
        });
      });
  };
}

export function toggleFilter(filter) {
  return dispatch => {
    dispatch({
      type: ActionTypes.TOGGLE_FILTER,
      data: filter
    });
  };
}

export function toggleEdit(item) {
  const {id, canEdit, text} = item.toObject();
  const newObj = item.mergeDeep(fromJS({text: text}));
  return dispatch => {
    if (canEdit === 1) {
      HttpRequest.put(`/api/todo/item/${id}`)
        .send(newObj.toObject())
        .end(()=>{
          dispatch({
            type: ActionTypes.TOGGLE_EDIT,
            data: {id: id, canEdit: canEdit}
          });
        });
    }else {
      dispatch({
        type: ActionTypes.TOGGLE_EDIT,
        data: {id: id, canEdit: canEdit}
      });
    }
  };
}

export function modifyTodo(oldObj, value) {
  const id = oldObj.get('id');
  return dispatch => {
    dispatch({
      type: ActionTypes.MODIFY_TODO,
      data: {id: id, text: value}
    });
  };
}
