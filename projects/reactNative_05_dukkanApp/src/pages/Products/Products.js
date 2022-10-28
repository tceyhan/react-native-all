/* eslint-disable prettier/prettier */
import {FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  //! custom hook created
  const {loading, data, error} = useFetch(Config.API_URL);
  console.log('render');
  console.log(loading, error, data.length);
  console.log('---------------');

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderItem = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    // return <ActivityIndicator size="large" />;
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <FlatList data={data} renderItem={renderItem} />;
};

export default Products;
