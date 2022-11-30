/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Errors = ({value}) => {
  return (
    <View style={styles.errors}>
      <Text style={styles.errors_text}>{value}</Text>
    </View>
  );
};

export default Errors;

const styles = StyleSheet.create({
    errors: {
        backgroundColor: '#007ac1',
        alignItems: 'center',
      },
      errors_text: {
        fontSize:18,
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
});
