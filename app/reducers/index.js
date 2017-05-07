// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import storage from './storage';

const rootReducer = combineReducers({
  storage,
  counter,
  router,
});

export default rootReducer;
