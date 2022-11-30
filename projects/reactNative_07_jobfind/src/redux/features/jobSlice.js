/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    selectedJob: '',
    favoriteJobs: [],
  },
  reducers: {
    selectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    addFavorite: (state, action) => {
      state.favoriteJobs.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteJobs = state.favoriteJobs.filter(item => {
        return item.id !== action.payload;
      });
    },
  },
});

export const {addFavorite, removeFavorite, selectedJob} = jobSlice.actions;
export default jobSlice.reducer;
