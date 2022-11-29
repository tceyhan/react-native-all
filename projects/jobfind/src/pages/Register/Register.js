/* eslint-disable prettier/prettier */
import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {showToast} from '../../components/Toast/ToastComp';
import styles from './Register.style';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userMail) {
      return Alert.alert(
        'Jobfind Application',
        'Information cannot be left blank',
      );
    }

    const user = {
      userName,
      userSurname,
      userMail,
    };
    console.log(user);
    showToast('register');
    navigation.navigate('Home', {user});
  }

  return (
    <View style={styles.container}>
      <Input
        label="Name :"
        placeholder="Enter member name..."
        onType={setUserName}
        iconName="account"
      />
      <Input
        label="Surname :"
        placeholder="Enter member surname..."
        onType={setUserSurname}
        iconName="account"
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
        IconColor="gray"
        IconLeft
      />
    </View>
  );
};

export default Register;
