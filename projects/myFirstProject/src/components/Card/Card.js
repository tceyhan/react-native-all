import React from 'react';
import styles from './Card.style';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

const Card = ({title, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert('Merhaba ' + title)}>
        <Text style={styles.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
