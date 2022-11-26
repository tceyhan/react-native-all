/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Home';
import Detail from '../Detail';
import HeaderBar from '../../components/HeaderBar';

const StackNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
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
          headerTitle: (props) => <HeaderBar {...props} />,
          title: 'Job Detail',
          headerStyle: {backgroundColor: 'white'},
          headerTitleStyle: {
            color: '#c55',
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
