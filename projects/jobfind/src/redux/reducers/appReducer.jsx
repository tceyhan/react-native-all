import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from '../types/appTypes';

const initialState = {
  loading: false,
  error: false,
};

const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return {...state, loading: true};
    case CLEAR_LOADING:
      return {...state, loading: false};
    case SET_ERROR:
      return {...state, error: true};
    case CLEAR_ERROR:
      return {...state, error: false};
    default:
      return state;
  };
};

export default appReducer;
