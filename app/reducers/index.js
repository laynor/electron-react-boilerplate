// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import pouchdb from './pouchdb'

const rootReducer = combineReducers({
  counter,
  router,
});
    pouchdb,

export default rootReducer;
