import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Atatürk" text="Hayatta en hakiki mürşit ilimdir." />
      <Card title="Tarık CEYHAN" text="Hayatta en hakiki durum npm run" />
      <Card title="Uzman" text="Sen bilirsin.." />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
  },
});

export default App;
