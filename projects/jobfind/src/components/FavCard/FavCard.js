/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Button from '../Button';
import styles from './FavCard.style';

const FavCard = ({data, onDetail}) => {
  console.log(data);
  const {name, company, locations, levels  } = data;
  console.log(name);
  return (
    <TouchableWithoutFeedback onPress={onDetail}>
      <View style={styles.container}>
        <Text style={styles.name}>{name.split('-', 1)}</Text>
        <Text style={styles.company_name}>{company.name}</Text>
        {locations.length > 0 ? (
          <Text style={styles.location}>{locations[0].name}</Text>
        ) : (
          <Text style={styles.location}>Empty Location</Text>
        )}
        <Text style={styles.level}>{levels[0].name}</Text>
        <Button text="Remove" />
      </View>
     
    </TouchableWithoutFeedback>
  );
};

export default FavCard;
