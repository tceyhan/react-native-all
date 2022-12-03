/* eslint-disable prettier/prettier */
import React  from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourite from '../Favourite';
import StackNavigation from './StackNavigation';
import CustomSideBarMenu from '../CustomSideBarMenu';

const DrawerNavigation = ({route}) => {
  const Drawer = createDrawerNavigator();
 const {user} = route.params;
 console.log('drawer',user);
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props)=> <CustomSideBarMenu {...props} user={user} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#a11',
        drawerStyle: {
          backgroundColor: '#c88',
          width: 220,
        },
        drawerLabelStyle: {
          fontSize: 17,
          fontWeight: 'bold',
          color: 'white',
        },
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
        options={{drawerLabel: 'Favorite Jobs'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
