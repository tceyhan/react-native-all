/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({text, onPress, loading, IconName, IconColor, IconLeft}) => {

  const IconLocationComp = () => {
    return (
      <View style={styles.inner_container}>
        {IconLeft ? (
          <>
            <Icon
              style={styles.icon}
              name={IconName}
              size={30}
              color={IconColor}
            />
            <Text style={styles.title}>{text}</Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>{text}</Text>
            <Icon
              style={styles.icon}
              name={IconName}
              size={30}
              color={IconColor}
            />
          </>
        )}
      </View>
    );
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? <ActivityIndicator color="white" /> : <IconLocationComp />}
    </TouchableOpacity>
  );
};

export default Button;
