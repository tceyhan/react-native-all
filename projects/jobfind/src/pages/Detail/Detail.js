/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

import styles from './Detail.style';

const Detail = ({route, navigation}) => {
  const [fav, setFav] = useState([]);
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  // console.log(data);

  useEffect(() => {
    const newFavList = [...fav, data];
    setFav(newFavList);
  }, [data]);

  const handleFav = () => {
    useEffect(() => {
      navigation.navigate('Favourite', {fav}); 
  }, [fav]);
};

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <DetailCard
        data={data}
        loading={loading}
        fav={fav}
        handleFav={handleFav}
      />
    </View>
  );
};

export default Detail;
