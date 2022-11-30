/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    fullName:null,
  },
  reducers: {
      // showUser:(state, action) => {
      //    state.fullName = action.payload;
      //    return state.fullName;
      // },
      addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => {
        AsyncStorage.removeItem('@USER');
        return user.id !== action.payload;
      });
    },
  },
});

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
