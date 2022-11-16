/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Favourite from '../Favourite';
import ApplyJobs from '../ApplyJobs';
import StackNavigation from './StackNavigation';

const Home = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
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
          options={{drawerLabel: 'Favorited Jobs'}}
        />
        <Drawer.Screen
          name="Applied Jobs"
          component={ApplyJobs}
          options={{drawerLabel: 'Applied Jobs'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;
