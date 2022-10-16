import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import music_data from './src/assets/music-data.json';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={music_data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
