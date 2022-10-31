import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

const MealCard = ({item}) => {
  console.log(item);

  return (
    <View style={styles.container}>
      <Image style = {styles.image} source={{uri: item.strMealThumb}} />
      <Text style={styles.name}>{item.strMeal}</Text>
    </View>
  );
};

export default MealCard;
