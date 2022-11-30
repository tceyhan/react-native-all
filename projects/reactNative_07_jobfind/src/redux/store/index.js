/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice';
import authSlice from '../features/authSlice';

const store = configureStore({
  reducer: {
    job: jobSlice,
    auth: authSlice,
  },
});

export default store;
