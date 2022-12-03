/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Detail from '../Detail';
import HeaderBar from '../../components/HeaderBar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StackNavigation = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  const handleFavPage = () => {
    navigation.navigate('Favourite');
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#c55'},
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Jobs',
          headerLeft: () => (
            <Icon
              name="heart-outline"
              size={30}
              color="white"
              onPress={handleFavPage}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: props => <HeaderBar {...props} />,
          // title: 'Job Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
