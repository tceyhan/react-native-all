/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';

const JobCard = ({item, onDetail}) => {
  // console.log(item);
  return (
    <TouchableWithoutFeedback onPress={onDetail}>
      <View style={styles.container}>
        <Text style={styles.name}>{item.name.split('-', 1)}</Text>
        <Text style={styles.company_name}>{item.company.name}</Text>
        {item.locations.length > 0 ? (
          <Text style={styles.location}>{item.locations[0].name}</Text>
        ) : (
          <Text style={styles.location}>Empty Location</Text>
        )}
        <Text style={styles.level}>{item.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
