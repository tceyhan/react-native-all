/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import React, { useState } from 'react';
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
      <TouchableHighlight style={styles.submit} underlayColor="#208080" onPress={handleList}>
        <Text style={styles.submitText}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Footer;
