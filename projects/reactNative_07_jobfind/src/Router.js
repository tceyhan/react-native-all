/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import {Provider} from 'react-redux';
import {ToastComp} from './components/Toast/ToastComp';
import AuthNavigation from './pages/navigations/AuthNavigation';

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
      <ToastComp />
    </Provider>
  );
};

export default Router;
