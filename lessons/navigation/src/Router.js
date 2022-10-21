import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './pages/First';
import Second from './pages/Second';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions ile bütün ekranlara aynı özelliği veriyoruz.
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* initialRouteName="ProfileScreen" verilebilir burda sıralamaya uymak istemez isek */}
        <Stack.Screen
        // options ile sadece o ekrana stillendirme yapıyoruz.
        // özelde burda verilen daha baskın gelir.background renginde olduğu gibi.
          name="HomeScreen"
          component={First}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: 'blueviolet',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="ProfileScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
