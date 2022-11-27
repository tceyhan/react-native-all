/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import {Provider} from 'react-redux';
import DrawerNavigation from './pages/navigations/DrawerNavigation';
import { ToastComp } from './components/Toast/ToastComp';


const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
      <ToastComp />
    </Provider>
  );
};

export default Router;
