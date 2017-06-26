import { combineReducers } from 'redux';
import appReducer from './appReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  appReducer,
  counter: counterReducer
});

export default rootReducer;
