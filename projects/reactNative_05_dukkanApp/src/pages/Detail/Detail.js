/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  // console.log(id);
  // console.log(data);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {container, image, body_container, desc, title, price} = styles;
  return (
    <View style={container}>
      <Image style={image} source={{uri: data.image}} />
      <View style={body_container}>
        <Text style={title}>{data.title}</Text>
        <Text style={desc}>{data.description}</Text>
        <Text style={price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
