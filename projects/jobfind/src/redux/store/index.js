/* eslint-disable prettier/prettier */
import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;

/* eslint-disable prettier/prettier */
// import {configureStore} from '@reduxjs/toolkit';
// import jobReducer from '../features/job/jobSlice';

// export default configureStore({
//   reducer: {
//     job: jobReducer,
//     app: appReducer,
//   },
// });
