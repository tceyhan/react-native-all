/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
