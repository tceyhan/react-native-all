/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Product.style';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data:productData} = await axios.get(Config.API_URL);
    console.log(productData);
    setData(productData);
  };

  const renderItem = ({item}) => <ProductCard product={item} />;
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Products;
