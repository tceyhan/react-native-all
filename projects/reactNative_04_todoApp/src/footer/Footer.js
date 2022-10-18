/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import React  from 'react';
import styles from './Footer.style';

const Footer = ({onChange, value, handleList}) => {

  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        onChangeText={onChange}
        value={value}
      />
      <TouchableHighlight style={value === '' ? styles.submit : styles.submit_empty} underlayColor="orange"  onPress={handleList}>
        <Text style={styles.submitText}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Footer;
