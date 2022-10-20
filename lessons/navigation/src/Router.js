import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './pages/First';
import Second from './pages/Second';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={First} />
        <Stack.Screen name="ProfileScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
