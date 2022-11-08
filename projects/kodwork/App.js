import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const App = () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('user signup');
      })
      .catch(err => console.error(err));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => {
        console.log('sign in');
      })
      .catch(err => console.error(err));
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('signed out'))
      .catch(err => console.log(err));
  };

  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  };
  const checkDB = () => {
    const reference = database().ref('books/');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };
  return (
    <View>
      <Text>App</Text>
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} color="orange" />
      <Button title="Sign Out" onPress={signOut} color="olive" />
      <Button title="Check Out" onPress={checkOut} color="green" />
      <Button title="Check DB" onPress={checkDB} color="black" />
      <Button title="Listen DB" onPress={listenDB} color="violet" />
    </View>
  );
};

export default App;
