/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import JobCard from '../../components/JobCard';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './Home.style';

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  console.log(data.results);

  const Pagination = () => {
    const totalPage = Math.floor(data.page_count / 20);
    const increasePage = () => {
      return setPage(page + 1);
    };
    const decreasePage = () => {
      return page === 1 ? setPage(1) : setPage(page - 1);
    };
    return (
      <View style={styles.container}>
        {page > 1 && <Icon name="chevron-left" size={30} onPress={decreasePage} />}
        <Button style={styles.button} text="Previous" onPress={decreasePage} />
        <View style={styles.page_container}>
          <Text style={styles.page}>
            {page + 1 } / {totalPage}
          </Text>
        </View>
        <Button style={styles.button} text="Next" onPress={increasePage} />
        {page !== totalPage && <Icon name="chevron-right" size={30} onPress={increasePage} />}
      </View>
    );
  };
  const handleDetail = id => {
    navigation.navigate('Detail', {id});
  };
  const renderJob = ({item}) => (
    <JobCard item={item} onDetail={() => handleDetail(item.id)} />
  );
  return (
    <View>
      <FlatList
        data={data.results}
        keyExtractor={item => item.id}
        renderItem={renderJob}
        ListFooterComponent={Pagination}
      />
    </View>
  );
};

export default Home;
