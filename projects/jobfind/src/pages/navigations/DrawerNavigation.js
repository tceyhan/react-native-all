/* eslint-disable prettier/prettier */

import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourite from '../Favourite';
import StackNavigation from './StackNavigation';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#a11',
        drawerStyle: {
          backgroundColor: '#c88',
          width: 240,
        },
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
        // drawerHideStatusBarOnOpen: true,
        // drawerStatusBarAnimation: 'fade',
        // drawerType:'slide',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{drawerLabel: 'Jobs'}}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{ drawerLabel: 'Favorite Jobs'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
