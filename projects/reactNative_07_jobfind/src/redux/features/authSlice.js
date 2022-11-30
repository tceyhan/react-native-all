/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
  },
  reducers: {
      addUser: (state, action) => {
      state.users.push(action.payload);
      const user = action.payload;
      AsyncStorage.setItem('@USER',  JSON.stringify(user));
    },
    removeUser: (state) => {
        AsyncStorage.removeItem('@USER');
        return state.users.pop();
    },
  },
});

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
