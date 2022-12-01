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
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#c66',
    alignItems: 'center',
  },
  errors_text: {
    fontSize: 15,
    color: 'navy',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
