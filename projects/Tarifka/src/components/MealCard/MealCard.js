import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

const MealCard = ({item, onSelectMeal}) => {
  // console.log(item);

  const handleTitle = () => {
    if (item.strMeal.length > 20) {
      return item.strMeal.slice(0, 30) + '...';
    }
    return item.strMeal;
  };


  return (
  <TouchableWithoutFeedback onPress={onSelectMeal}>
     <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.strMealThumb}} />
      <View style={styles.title_container}>
        <Text style={styles.title}>{handleTitle()}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
   
  );
};

export default MealCard;
