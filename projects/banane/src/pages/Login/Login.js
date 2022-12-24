/* eslint-disable prettier/prettier */
import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './Login.style';

//? Custom Components

import Input from '../../components/Input';
import Button from '../../components/Button';
import Errors from '../../components/YupErrors';

//? Formik ve Yup

import {Formik} from 'formik';
import * as Yup from 'yup';
const LoginSchema = Yup.object().shape({
  userMail: Yup.string()
    .email('mail adress must be a valid')
    .required('Required'),
  userPassword: Yup.string()
    .min(4, 'Too Short! password must to contain at least 4 characters')
    .max(15, 'Too Long! password must to contain at most 15 characters')
    .required('Required'),
});

const Login = ({navigation}) => {



  return (
    <View style={styles.container}>
      {/* statüs bar rengini uygulamamız ile uyumlu olmasını istersek bu componenti kullanabiliriz */}
      <StatusBar barStyle="dark-content" backgroundColor="#c99" />
      {/*uygulama iconu ile uyumlu yada uygulamaya uyumlu bir png resmi login sayfasında girişte olmalı  */}
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/jobfind.png')}
        />
      </View>
      <Formik
        initialValues={{userMail: '', userPassword: ''}}
        onSubmit={handleLogin}
        validationSchema={LoginSchema}>
        {({handleSubmit, handleChange, values, errors}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter the mail address.."
              value={values.userMail}
              onType={handleChange('userMail')}
              iconName="account"
            />
            {errors.userMail ? <Errors value={errors.userMail} /> : null}
            <Input
              placeholder="Enter your password.."
              value={values.userPassword}
              onType={handleChange('userPassword')}
              iconName="key"
              isSecure
            />
            {errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
            <Button
              text="Login"
              onPress={handleSubmit}
              IconName="account"
              IconColor="white"
              IconLeft
              // loading
            />
            <Text style={styles.or}>OR</Text>
            <Button
              text="Register"
              onPress={handleRegisterPage}
              IconName="account-plus-outline"
              IconColor="white"
              IconLeft
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
