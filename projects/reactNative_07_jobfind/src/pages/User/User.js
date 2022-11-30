/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const User = () => {
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

  return (
    <View>
      <Text>fullName</Text>
      <Text>{user}</Text>
    </View>
  );
};

export default User;
