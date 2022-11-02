import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';
import styles from './Detail.style';
const Detail = ({route}) => {
  const {idMeal} = route.params; 

  const {data, error, loading} = useFetch(`${Config.API_DETAIL}${idMeal}`);
  // console.log(data);

  const renderMeal = ({item}) => <DetailCard item={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
      keyExtractor={item => item.idMeal}
      data={data.meals}
      renderItem={renderMeal}
      />
    </View>
  );
};

export default Detail;
