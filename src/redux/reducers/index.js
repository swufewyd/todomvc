import { combineReducers } from 'redux';
import client from './client';
import test from './test';
import todo from './todo';

const rootReducer = combineReducers({
  client: client,
  test: test,
  todo: todo,
});

export default rootReducer;
