/* eslint-disable prettier/prettier */
import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {showToast} from '../../components/Toast/ToastComp';
import uuid from 'react-native-uuid';

import styles from './Register.style';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/features/authSlice';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const dispatch = useDispatch();
  console.log('render');

  function handleSubmit() {
    if (!userName || !userSurname || !userMail) {
      return Alert.alert(
        'Jobfind Application',
        'Information cannot be left blank',
      );
    }

    const user = {
      id: uuid.v4(),
      userName,
      userSurname,
      userFullName: `${userName} ${userSurname}`,
      userPassword,
      userMail,
    };
    console.log(user);
    showToast('register');
    dispatch(addUser(user));
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Input
        label="Name :"
        placeholder="Enter name..."
        onType={setUserName}
        iconName="account"
      />
      <Input
        label="Surname :"
        placeholder="Enter surname..."
        onType={setUserSurname}
        iconName="account"
      />
      <Input
        label="Password:"
        placeholder="Enter password..."
        onType={setUserPassword}
        iconName="key"
        isSecure
      />

      <Input
        label="E-Posta :"
        placeholder="Enter mail adress..."
        onType={setUserMail}
        iconName="email-outline"
      />

      <Button
        text="Register"
        onPress={handleSubmit}
        IconName="account-plus-outline"
        IconColor="white"
        IconLeft
      />
    </View>
  );
};

export default Register;
