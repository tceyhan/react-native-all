/* eslint-disable prettier/prettier */
import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';

const Products = ({navigation}) => {
  //! custom hook created
  const {loading, data, error} = useFetch(Config.API_URL);
  const [newList, setNewList] = useState();
  console.log('render');
  console.log('---------------');
  const [text, setText] = useState('');

  useEffect(() => {
    setNewList(data);
  }, [data]);

  const onChange = value => {
    setText(value);
  };
  // console.log(text);
  const handleSearch = () => {
    const filteredProducts = data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    console.log(filteredProducts);
    setNewList(filteredProducts);
  };
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

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
      <SearchBar onChange={onChange} value={text} setNewList={setNewList} data={data} />
      <FlatList data={newList} renderItem={renderItem} />
    </View>
  );
};

export default Products;


