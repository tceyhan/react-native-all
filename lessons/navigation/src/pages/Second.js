/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Second = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    text:{fontSize: 50, fontWeight: 'bold'},
});

export default Second;
