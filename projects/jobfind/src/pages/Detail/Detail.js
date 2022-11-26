/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

import styles from './Detail.style';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/features/jobSlice';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  // console.log(data);
  const dispatch = useDispatch();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
const handleFav = (item) => {
  dispatch(addFavorite(item));
};
  return (
    <View style={styles.container}>
      <DetailCard
        data={data}
        loading={loading}
        handleFav={handleFav}
      />
    </View>
  );
};

export default Detail;
