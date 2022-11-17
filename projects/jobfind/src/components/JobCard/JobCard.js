/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = ({item, onDetail}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.locations[0].name}</Text>
      <Text>{item.levels[0].name}</Text>
      <Text>{item.company.name}</Text>
    </View>
  );
};

export default JobCard;
