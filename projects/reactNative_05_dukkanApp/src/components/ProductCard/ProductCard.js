/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  const {container, image, body_container, title, price} = styles;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={container}>
        <Image style={image} source={{ uri: product.image }} />
        <View style={body_container}>
          <Text style={title}>{product.title}</Text>
          <Text style={price}>{product.price}TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
