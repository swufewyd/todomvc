import { combineReducers } from 'redux';
import client from './client';
import test from './test';

const rootReducer = combineReducers({
  client: client,
  test: test,
});

export default rootReducer;
