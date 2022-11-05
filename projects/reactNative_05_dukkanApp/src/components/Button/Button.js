/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
