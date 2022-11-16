const initialState = {

}

const favouriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}
 export default favouriteReducer;