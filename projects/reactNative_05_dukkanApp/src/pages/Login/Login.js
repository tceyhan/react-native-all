/* eslint-disable prettier/prettier */
import {View, Image} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Errors from '../../components/YupErrors';
import {Formik} from 'formik';



import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  function handleLogin(values) {
    console.log(values);
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
            {errors.username ? (
             <Errors value={errors.username} />) : null
            }
            <Input
              placeholder="Şifrenizi giriniz.."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            {errors.password ? (
             <Errors value={errors.password} />) : null
            }
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
