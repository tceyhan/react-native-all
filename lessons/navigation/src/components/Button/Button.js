/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
