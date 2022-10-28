/* eslint-disable prettier/prettier */
import {ScrollView} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../Loading';
import Error from '../Error';
import styles from './Category.style';
import CategoryCard from './CategoryCard';

const Category = () => {
  const {loading, error, data} = useFetch(`${Config.API_URL}/categories`);
  //  console.log(data);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ScrollView style={styles.category_container} horizontal showsHorizontalScrollIndicator={false}>
      {
      data.map(category =>  <CategoryCard category={category} key={category.index}/>)
      }
    </ScrollView>
  );
};

export default Category;
