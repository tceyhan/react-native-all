/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

const CategoryCard = ({category, categoryFilter}) => {
  return (
    <TouchableWithoutFeedback onPress={() => categoryFilter(category)}>
      <View style={styles.button}>
        <Text style={styles.text}>{category.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: '#c54800',
    borderRadius: 10,
    marginRight: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
