/* eslint-disable prettier/prettier */
import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import Category from '../../components/Category';

const Products = ({navigation}) => {
  //! custom hook created
  const {loading, data, error} = useFetch(Config.API_URL);
  const [newList, setNewList] = useState();
  console.log('render');
  // console.log(loading, error, data.length, newList);
  console.log('---------------');

  useEffect(() => {
    setNewList(data);
  }, [data]);

  const handleSearch = text => {
    const filteredProducts = data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    console.log(filteredProducts);
    setNewList(filteredProducts);
  };
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
  return (
    <View>
      <SearchBar handleSearch={handleSearch} />
      <FlatList data={newList} renderItem={renderItem} />
      {/* numColumns={2} may be added */}
    </View>
  );
};

export default Products;
