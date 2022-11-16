/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import jobReducer from './jobReducer';
// import favouriteReducer from './favouriteReducer';

const rootReducer = combineReducers({
  app: appReducer,
  job: jobReducer,
  // favourite: favouriteReducer,
});

export default rootReducer;
