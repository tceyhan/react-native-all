/* eslint-disable prettier/prettier */
import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({label, placeholder, handleChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={handleChangeText} />
      </View>
    </View>
  );
};

export default Input;
