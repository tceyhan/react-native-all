/* eslint-disable prettier/prettier */
import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const MembersSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userVillage, setUserVillage] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userVillage) {
      return Alert.alert('Köylüm Uygulaması', 'Bilgiler boş bırakılamaz ');
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userVillage,
    };
    console.log(user);
    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View>
      <Input
        label="Adı :"
        placeholder="Üye ismini giriniz..."
        handleChangeText={setUserName}
      />
      <Input
        label="Soyadı :"
        placeholder="Üye soyismini giriniz..."
        handleChangeText={setUserSurname}
      />
      <Input
        label="Yaşı :"
        placeholder="Üye yaşını giriniz..."
        handleChangeText={setUserAge}
      />
      <Input
        label="E-Posta :"
        placeholder="Üye e-posta giriniz..."
        handleChangeText={setUserMail}
      />
      <Input
        label="Köyü  :"
        placeholder="Üye köyünü giriniz..."
        handleChangeText={setUserVillage}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
};

export default MembersSign;
