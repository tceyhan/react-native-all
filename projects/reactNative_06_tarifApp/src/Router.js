import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Category from './pages/Category';
import MealList from './pages/MealList';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {
              color: 'orange',
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={MealList}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {
              color: 'orange',
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {
              color: 'orange',
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
