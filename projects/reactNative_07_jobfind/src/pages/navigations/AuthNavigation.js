/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../Register';
import Login from '../Login/Login';
import DrawerNavigation from './DrawerNavigation';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: '#c55'},
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
