/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import React, { useState } from 'react';
import styles from './Footer.style';

const Footer = ({onChange}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        // defaultValue="Todo: "
        // multiline
        // numberOfLines={2}
        onChangeText={text => setValue(text)}
        value={value}
        isFocused
      />
      <TouchableHighlight style={styles.submit} underlayColor="#208080">
        <Text style={styles.submitText}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Footer;
