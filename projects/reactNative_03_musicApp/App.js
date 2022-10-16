import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import music_data from './src/assets/music-data.json';
import MusicCard from './src/components/MusicCard';

const App = () => {
  const renderSong = ({item}) => <MusicCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator}/>
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
});
