import {View, FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/MealCard';
import styles from './MealList.style';

const MealList = ({route}) => {
  const {strCategory} = route.params;
  // console.log(strCategory);
  const {data, loading, error} = useFetch(`${Config.API_MEALS}${strCategory}`);
  console.log(data);

  const renderMeals = ({item}) => <MealCard item={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        keyExtractor={item => item.idMeal}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealList;
