/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './DetailCard.style';
import Button from '../Button';

const DetailCard = ({data, handleFav, handleApply}) => {
  console.log(data);
  console.log(typeof (data.refs.landing_page));
  const {width} = useWindowDimensions();
  const {contents, name, locations, levels, refs} = data;
  const source = {html: contents};
  return (
    <ScrollView contentContainerStyle={styles.content_container}>
      <View style={styles.header_container}>
        <Text style={styles.jobname}>{name.split('-',1)}</Text>
        <Text style={styles.text}>
          Locations: <Text style={styles.inner_text}>{locations[0].name}</Text>{' '}
        </Text>
        <Text style={styles.text}>
          Job Level: <Text style={styles.inner_text}> {levels[0].name}</Text>
        </Text>
        <Text style={styles.header}>Job Detail</Text>
      </View>
      <RenderHtml contentWidth={width} source={source} />
      <View style={styles.button_container}>
        <Button
          style={styles.button}
          onPress={() => handleApply(refs.landing_page)}
          text="Submit"
          IconName="logout"
          IconColor="white"
          IconLeft
        />
        <Button
          style={styles.button}
          onPress={() => handleFav(data)}
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
