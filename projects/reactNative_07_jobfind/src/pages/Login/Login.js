/* eslint-disable prettier/prettier */
import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Errors from '../../components/YupErrors';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';


import * as Yup from 'yup';
import { showToast } from '../../components/Toast/ToastComp';
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
  const {users} = useSelector(state => state.auth);
  // console.log(users);

  function handleLogin(values) {
    // console.log(values);
    let user = users.map(
      item =>
        item.userMail === values.userMail &&
        item.userPassword === values.userPassword,
    );
    console.log(user[0]);
    if (user[0]) {
      showToast('welcome');
      navigation.navigate('Home');
    } else {
      showToast('errorlogin');
      return;
    }
  }

  function handleRegisterPage() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#c99" />
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
