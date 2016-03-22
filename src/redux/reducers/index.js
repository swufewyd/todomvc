import { combineReducers } from 'redux';
import client from './client';

const rootReducer = combineReducers({
  client: client
});

export default rootReducer;
