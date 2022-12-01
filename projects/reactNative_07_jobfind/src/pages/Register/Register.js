/* eslint-disable prettier/prettier */
import {Image, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {showToast} from '../../components/Toast/ToastComp';
import uuid from 'react-native-uuid';
import styles from './Register.style';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../redux/features/authSlice';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Errors from '../../components/YupErrors/YupErrors';


const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short! name must to contain at least 3 characters')
    .required('Required'),
  userSurname: Yup.string()
    .min(3, 'Too Short! surnames must to contain at least 3 characters')
    .required('Required'),
  userPassword: Yup.string()
    .min(4, 'Too Short! password must to contain at least 4 characters')
    .max(15, 'Too Long! password must to contain at most 15 characters')
    .required('Required'),
  userMail: Yup.string().email('mail adress must be a valid').required('Required'),
});
const Register = ({navigation}) => {
  const {users} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function handleRegister(values) {
    let userCheck = users.map(
      item =>
        item.userMail === values.userMail &&
        item.userPassword === values.userPassword,
    );
    console.log(userCheck[0]);
    const user = {
      id: uuid.v4(),
      userName: values.userName,
      userSurname: values.userSurname,
      userFullName: `${values.userName} ${values.userSurname}`,
      userPassword: values.userPassword,
      userMail: values.userMail,
    };
    console.log(user);

    if (userCheck[0]) {
      showToast('varuser');
      return;
    } else {
      showToast('register');
      dispatch(addUser(user));
      navigation.navigate('Login');
    }
  }

  function handleLoginPage() {
    navigation.navigate('Login');
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
        initialValues={{
          userName: '',
          userSurname: '',
          userPassword: '',
          userMail: '',
        }}
        onSubmit={handleRegister}
        validationSchema={RegisterSchema}>
        {({handleSubmit, handleChange, values, errors}) => (
          <View>
            <Input
              placeholder="Enter name..."
              value={values.userName}
              onType={handleChange('userName')}
              iconName="account"
            />
            {errors.userName ? <Errors value={errors.userName} /> : null}
            <Input
              placeholder="Enter surname..."
              value={values.userSurname}
              onType={handleChange('userSurname')}
              iconName="account"
            />
            {errors.userSurname ? <Errors value={errors.userSurname} /> : null}
            <Input
              placeholder="Enter password..."
              value={values.userPassword}
              onType={handleChange('userPassword')}
              iconName="key"
              isSecure
            />
            {errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
            <Input
              placeholder="Enter mail adress..."
              value={values.userMail}
              onType={handleChange('userMail')}
              iconName="email-outline"
              inputType="email"
            />
            {errors.userMail ? <Errors value={errors.userMail} /> : null}
            <Button
              text="Register"
              onPress={handleSubmit}
              IconName="account-plus-outline"
              IconColor="white"
              IconLeft
            />
            <Text style={styles.or}>OR</Text>
            <Button
              text="Login"
              onPress={handleLoginPage}
              IconName="account"
              IconColor="white"
              IconLeft
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
