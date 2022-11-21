/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({text, onPress, loading, IconName, IconColor}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles.inner_container}>
          <Icon style={styles.icon} name={IconName} size={30} color={IconColor} />
          <Text style={styles.title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
