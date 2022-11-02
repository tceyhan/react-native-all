import {View, Text, FlatList, Linking, Alert} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';
import styles from './Detail.style';
const Detail = ({route}) => {
  const {idMeal} = route.params;

  const {data, error, loading} = useFetch(`${Config.API_DETAIL}${idMeal}`);
  // console.log(data);

  const handleYoutube = strYoutube => {
    // const defaultUrl = 'https://www.youtube.com/watch?v=5VpRVFksFIs&list=PL8K6uJCkG8wvWCPrE3_w41W_jqohJfkKI&ab_channel=NefisYemekTarifleri';
    if (strYoutube) {
      return Linking.openURL(strYoutube);
    } else {
      return Alert.alert("Sorry. This Meal hasn't youtube link.");
    }
  };

  const renderMeal = ({item}) => (
    <DetailCard
      item={item}
      handleYoutube={() => handleYoutube(item.strYoutube)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderMeal}
      />
    </View>
  );
};

export default Detail;
