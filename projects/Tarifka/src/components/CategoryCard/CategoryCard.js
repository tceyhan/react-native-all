import {Image, Text, View} from 'react-native';
import React from 'react';

import styles from './CategoryCard.style';
const CategoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
      <Text style={styles.text}>{item.strCategory}</Text>
    </View>
  );
};

export default CategoryCard;

