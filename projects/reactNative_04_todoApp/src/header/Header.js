/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.style';
const Header = ({count}) => {
  return (
    <View style={styles.todoNumber_container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.number}>{count}</Text>
    </View>
  );
};

export default Header;
