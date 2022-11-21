/* eslint-disable prettier/prettier */
import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import JobCard from '../../components/JobCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  // console.log(data.results);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }


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
        ListFooterComponent={<Pagination page={page} setPage={setPage} data={data} />}
      />
    </View>
  );
};

export default Home;
