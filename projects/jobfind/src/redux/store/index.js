/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice';

const store = configureStore({
  reducer: {
    job: jobSlice,
  },
});

export default store;
