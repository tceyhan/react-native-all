import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

import styles from './CategoryCard.style';
const CategoryCard = ({item, categorySelected}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => categorySelected(item.strCategory)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
        <Text style={styles.text}>{item.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
