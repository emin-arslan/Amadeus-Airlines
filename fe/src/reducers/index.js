import { combineReducers } from 'redux';

import app from './appReducer';
import ui from './uiReducer'
const reducers = {
  app,
  ui,
};

export default combineReducers(reducers);
