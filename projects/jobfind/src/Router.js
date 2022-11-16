import React from 'react';

import store from './redux/store';
import {Provider} from 'react-redux';
import DrawerNavigation from './pages/navigations/DrawerNavigation';
import 'react-native-gesture-handler';

const Router = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default Router;
