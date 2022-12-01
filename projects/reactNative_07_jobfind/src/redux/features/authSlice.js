/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast} from '../../components/Toast/ToastComp';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      let userCheck = state.users.map(
        item =>
          item.userMail === action.payload.userMail &&
          item.userPassword === action.payload.userPassword,
      );
      if (userCheck[0]) {
        showToast('varuser');
        return;
      } else {
        showToast('register');
        state.users.push(action.payload);
        AsyncStorage.setItem('@USER', JSON.stringify(action.payload));
      }
    },
    removeUser: state => {
      AsyncStorage.removeItem('@USER');
      return state.users.pop();
    },
  },
});

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
