/* eslint-disable prettier/prettier */
import {
  Button,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../Loading';
import Error from '../Error';
import styles from './Category.style';
import CategoryCard from './CategoryCard';

const Category = ({setNewList, productList}) => {
  const {loading, error, data} = useFetch(`${Config.API_URL}/categories`);

  const categoryFilter = category => {
    // console.log(productList);
    // console.log(data);
    // console.log(category);
    const last = productList.filter(item => item.category === category);
    setNewList(last);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ScrollView
      style={styles.category_container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => setNewList(productList)}>
        <View style={styles.button}>
          <Text style={styles.text}>ALL</Text>
        </View>
      </TouchableWithoutFeedback>
      {data?.map(category => (
        <CategoryCard
          category={category}
          categoryFilter={categoryFilter}
          key={category}
        />
      ))}
    </ScrollView>
  );
};

export default Category;
