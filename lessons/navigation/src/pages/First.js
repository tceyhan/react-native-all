/* eslint-disable prettier/prettier */
import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const First = ({navigation}) => {
    const navigateToPage = () => {
        navigation.navigate('ProfileScreen', {username: 'tarık ceyhan'});
    };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Screen</Text>
      <Button title="Go to second page" onPress={navigateToPage} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    text:{fontSize: 50, fontWeight: 'bold'},
});
export default First;
