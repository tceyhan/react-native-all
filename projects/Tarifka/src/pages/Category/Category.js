/* eslint-disable no-undef */
import {View, Text, FlatList} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Category.style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Category = ({navigation}) => {
  const {data, error, loading} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  console.log(data.categories);
  const renderCategory = ({item}) => <CategoryCard item={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        // keyExtractor={item => item.idCategory}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Category;
