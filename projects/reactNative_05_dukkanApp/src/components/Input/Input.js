/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.style';


const Input = ({placeholder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure} />
      <Icon name={iconName} size={35} color="lightgray"/>
    </View>
  );
};

export default Input;
