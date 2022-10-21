/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  console.log(route);

  const {userName, userSurname, userAge, userMail, userVillage} = route.params.user;
  return (
    <View style={styles.container}>
      <Text style={styles.message}> Kayıt Tamamlandı !</Text>
      <Text style={styles.label}>Üyenin Adı : {userName} </Text>
      <Text style={styles.label}>Üyenin Soyadı : {userSurname} </Text>
      <Text style={styles.label}>Üyenin Yaşı : {userAge} </Text>
      <Text style={styles.label}>Üyenin Soyadı : {userMail} </Text>
      <Text style={styles.label}>Üyenin Soyadı : {userVillage} </Text>
    </View>
  );
}

export default MemberResult;

const styles = StyleSheet.create({
  container: {flex:1, justifyContent: 'center',},
  label: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
    color: 'black',
    marginLeft: 10,
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 55,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
});
