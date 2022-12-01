/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Detail from '../Detail';
import HeaderBar from '../../components/HeaderBar';

import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeUser} from '../../redux/features/authSlice';
import {useDispatch} from 'react-redux';

const StackNavigation = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@USER');
      return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(user);

  const handleRemove = () => {
    dispatch(removeUser);
    navigation.navigate('Login');
  };
  const handleFavPage = () => {
       navigation.navigate('Favourite');
  };

  return (
    <Stack.Navigator>
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
          headerRight: () => (
            <Icon
              name="logout"
              size={30}
              color="white"
              onPress={handleRemove}
            />
          ),
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
          headerTitle: props => <HeaderBar {...props} />,
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
