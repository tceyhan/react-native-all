/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './DetailCard.style';
import Button from '../Button';

const DetailCard = ({data}) => {
  console.log(data.locations);
  const {width} = useWindowDimensions();
  const {
    contents,
    short_name,
    locations,
    levels,
  } = data;
  const source = {html: contents};
  return (
    <ScrollView contentContainerStyle={styles.content_container}>
      <View style={styles.header_container}>
        <Text>{short_name}</Text>
        <Text>Location: {locations[0].name}</Text>
        <Text>Job Level: {levels[0].name}</Text>
        <Text>Job Detail</Text>
      </View>
      <RenderHtml contentWidth={width} source={source} />
      <View style={styles.button_container}>
        <Button
          style={styles.button}
          text="Submit"
          IconName="logout"
          IconColor="white"
          IconLeft
        />
        <Button
          style={styles.button}
          text="Favorite Job"
          IconName="heart-outline"
          IconColor="white"
          IconLeft
        />
      </View>
    </ScrollView>
  );
};

export default DetailCard;
