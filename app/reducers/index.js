// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import storage from './storage';
import docs from './docs'

const rootReducer = combineReducers({
  docs,
  storage,
  counter,
  router,
});

export default rootReducer;
