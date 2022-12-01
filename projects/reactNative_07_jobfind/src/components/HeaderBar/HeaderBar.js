/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const HeaderBar = () => {
  const {selectedJob} = useSelector(state => state.job);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${selectedJob ? selectedJob : ''}`}</Text>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
