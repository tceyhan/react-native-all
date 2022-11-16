import {
  SET_JOBS_LIST,
  CLEAR_JOBS_LIST,
  ADD_JOB,
  REMOVE_JOB,
} from '../types/jobTypes';
const initialState = {
  jobList: [],
  summitJobList: [],
};

const jobReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_JOBS_LIST:
      return {...state, jobList: payload};
    case CLEAR_JOBS_LIST:
      return initialState.jobList;
    case ADD_JOB:
      return {...state, summitJobList: [...summitJobList, ...payload]};
    case REMOVE_JOB:
      return {...state, summitJobList: [...summitJobList, ...payload]};
    default:
      return state;
  }
};

export default jobReducer;
