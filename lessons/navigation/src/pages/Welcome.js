/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goToMemberSign = () => {
    console.log('button');
    navigation.navigate('MemberSignScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Köylüm Uygulaması</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // backgroundColor: 'red',
  },
  text: {fontSize: 35, fontWeight: 'bold', marginBottom: 10},
});
