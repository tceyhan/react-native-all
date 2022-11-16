const initialState = {};

const jobReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case typeName:
      return {...state, ...payload};

    default:
      return state;
  }
};

export default jobReducer;