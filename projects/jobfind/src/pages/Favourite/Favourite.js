/* eslint-disable prettier/prettier */
import {FlatList, View} from 'react-native';
import React from 'react';
import FavCard from '../../components/FavCard';

const Favourite = ({route}) => {
  const {fav} = route.params;
  // console.log(fav);

 const renderFav = ({item}) => <FavCard data={item} />;
  return (
    <View>
      <FlatList
       keyExtractor={item => item.id}
       data={fav}
       renderItem={renderFav}
      />
    </View>
  );
};

export default Favourite;
