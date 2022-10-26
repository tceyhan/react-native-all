/* eslint-disable prettier/prettier */
import {View, FlatList, Text} from 'react-native';
import React from 'react';
import styles from './Product.style';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = () => {

  //! custom hook created
  const {loading, data, error} = useFetch(Config.API_URL);
  console.log('render');
  console.log(loading, error, data.length);
  console.log('---------------');

  const renderItem = ({item}) => <ProductCard product={item} />;

  if (loading) {
    // return <ActivityIndicator size="large" />;
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Products;
