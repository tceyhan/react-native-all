/* eslint-disable prettier/prettier */
import {FlatList, Text, View} from 'react-native';
import React from 'react';
import FavCard from '../../components/FavCard';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import styles from './Favourite.style';
import Empty from '../../components/Empty';

const Favourite = ({navigation}) => {
  const {favoriteJobs} = useSelector(state => state.job);
  // console.log(favoriteJobs);

  const backHome = () => {
    navigation.navigate('StackNavigation');
  };

  const handleDetail = (id) => {
    navigation.navigate('Detail', {id});
  };

  const renderFav = ({item}) => <FavCard data={item} handleDetail={() => handleDetail(item.id)}/>;
  return (
    <View style={styles.up_container}>
      {favoriteJobs.length > 0 && (
        <FlatList data={favoriteJobs} renderItem={renderFav} />
      )}
      {favoriteJobs.length === 0 && (
        <View style={styles.container}>
          <Empty style={styles.lottie} />
          <View>
            <Text style={styles.title}> You don't have any favorite job</Text>
            <Button
              style={styles.buttons}
              text="Home Page"
              onPress={backHome}
              IconName="home"
              IconColor="white"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Favourite;
