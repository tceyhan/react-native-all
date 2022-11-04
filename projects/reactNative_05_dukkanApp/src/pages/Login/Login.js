/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/login_logo.png')} />
      </View>
      <View style={styles.body_container}>
        <Input placeholder="Kullanıcı adını giriniz.." />
        <Input placeholder="Şifrenizi giriniz.." />
        <Button text="Giriş Yap"/>
        <Text>Dükkan</Text>
      </View>
    </View>
  );
};

export default Login;
