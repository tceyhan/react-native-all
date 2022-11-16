/* eslint-disable prettier/prettier */
import {
  SET_JOBS_LIST,
  CLEAR_JOBS_LIST,
  ADD_JOB,
  REMOVE_JOB,
} from '../types/jobTypes';

export const setJobsList = jobs => ({
  type: SET_JOBS_LIST,
  payload: jobs,
});
export const clearJobsList = () => ({
  type: CLEAR_JOBS_LIST,
});
export const addJob = job => ({
  type: ADD_JOB,
  payload: job,
});
export const removeJob = job => ({
  type: REMOVE_JOB,
  payload: job,
});
