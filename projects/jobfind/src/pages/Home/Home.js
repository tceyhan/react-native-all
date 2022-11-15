/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourite from '../Favourite';
import ApplyJobs from '../ApplyJobs';
const Home = () => {
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
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: 'fade',
        // drawerType:'slide',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{drawerLabel: 'Favorited Jobs'}}
      />
      <Drawer.Screen name="ApplyJobs" component={ApplyJobs} />
    </Drawer.Navigator>
  );
};

export default Home;
