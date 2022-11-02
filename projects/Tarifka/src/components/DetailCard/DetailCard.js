import {View, Text, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import styles from './DetailCard.style';


const DetailCard = ({item,handleYoutube}) => {
    console.log(item);
    
  return (
<ScrollView>
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:item.strMealThumb}} />
        <View style={styles.inner_container}>
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text style={styles.title}>{item.strArea}</Text>
        </View>
        <View style={styles.seperator} />
        <Text style={styles.desc}>{item.strInstructions}</Text>
        <TouchableOpacity style={styles.button} onPress={handleYoutube}>
            <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
    </View> 
</ScrollView>
  );
};

export default DetailCard;
