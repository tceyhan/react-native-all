/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CategoryCard = ({category}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{category.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    backgroundColor: '#8090ff',
    borderRadius: 10,
    marginRight: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
