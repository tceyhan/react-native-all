/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../Register';
import Login from '../Login/Login';
import DrawerNavigation from './DrawerNavigation';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          headerShown: false,
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
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerShown: false,
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
        name="Home"
        component={DrawerNavigation}
        options={{
          title: 'Drawer',
          headerShown: false,
          headerStyle: {backgroundColor: '#c55'},
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
