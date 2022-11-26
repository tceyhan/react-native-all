/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FavCard from '../../components/FavCard';
import {useSelector} from 'react-redux';

const Favourite = () => {
  const {favoriteJobs} = useSelector(state => state.job);
  // console.log(favoriteJobs);

  const renderFav = ({item}) => <FavCard data={item} />;
  return (
    <View>
      {favoriteJobs.length > 0 ? (
        <FlatList data={favoriteJobs} renderItem={renderFav} />
      ) : (
        <Text style={styles.title}>You don't have any favorite job</Text>
      )}
    </View>
  );
};

export default Favourite;

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
});
