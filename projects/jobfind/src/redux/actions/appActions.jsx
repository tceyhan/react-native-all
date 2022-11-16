/* eslint-disable prettier/prettier */
import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from '../types/appTypes';

export const setLoading = () => ({
  type: SET_LOADING,
});
export const clearLoading = () => ({
  type: CLEAR_LOADING,
});
export const setError = () => ({
  type: SET_ERROR,
});
export const clearError = () => ({
  type: CLEAR_ERROR,
});
