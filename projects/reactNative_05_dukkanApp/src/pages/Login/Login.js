/* eslint-disable prettier/prettier */
import {View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Errors from '../../components/YupErrors';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import * as Yup from 'yup';
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short! username must to contain at least 3 characters')
    .max(20, 'Too Long! username must tı contain at most 20 characters')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short! password must to contain at least 4 characters')
    .max(15, 'Too Long! password must to contain at most 15 characters')
    .required('Required'),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error, data, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
    // console.log(values);
  }
  if (error) {
    Alert.alert('dükkanApp', 'Bir hata oluştu!');
  }
  if (data) {
    if (data.status === 'Error') {
      return Alert.alert('dükkanApp', 'Kullanıcı bulunamadı!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login_logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}
        validationSchema={LoginSchema}>
        {({handleSubmit, handleChange, values, errors}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz.."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            {errors.username ? <Errors value={errors.username} /> : null}
            <Input
              placeholder="Şifrenizi giriniz.."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            {errors.password ? <Errors value={errors.password} /> : null}
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  id: 1,
  email: 'John@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  },
  phone: '1-570-236-7033',
};
