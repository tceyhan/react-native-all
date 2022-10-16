/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import React, { useState } from 'react';
import styles from './Footer.style';

const Footer = ({onChange, text, setText}) => {
  
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        // defaultValue="Todo: "
        // multiline
        // numberOfLines={2}
        onChangeText={() => setText(text)}
        value={text}
        // isFocused
      />
      <TouchableHighlight style={styles.submit} underlayColor="#208080" onSubmit={onChange}>
        <Text style={styles.submitText}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Footer;
