/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let store;
if (process.env.NODE_ENV === 'developement') {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
