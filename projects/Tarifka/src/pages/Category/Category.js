import {View, FlatList} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Category.style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Category = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_CATEGORIES);
  // console.log(data.categories);

  const categorySelected = strCategory => {
    navigation.navigate('MealPage', {strCategory});
  };
  const renderCategory = ({item}) => (
    <CategoryCard item={item} categorySelected={categorySelected} />
  );

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
        keyExtractor={item => item.idCategory}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Category;
