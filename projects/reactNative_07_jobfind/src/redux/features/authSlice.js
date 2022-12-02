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
    addUser: (state, {payload}) => {
      let userCheck = state.users.some(
        item =>
          (item.userMail === payload.userMail &&
            item.userPassword === payload.userPassword) ||
          item.userMail === payload.userMail,
      );
      console.log('usercheck', userCheck);
      if (userCheck) {
        showToast('varuser');
        return;
      } else {
        showToast('register');
        state.users.push(payload);
        AsyncStorage.setItem('@USER', JSON.stringify(payload));
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
