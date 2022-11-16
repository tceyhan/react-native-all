import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

import 'react-native-gesture-handler';

import store from './redux/store';
import {Provider} from 'react-redux';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Jobs',
              headerStyle: {backgroundColor: '#c55'},
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'Job Detail',
              headerStyle: {backgroundColor: 'white'},
              headerTitleStyle: {
                color: 'purple',
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
