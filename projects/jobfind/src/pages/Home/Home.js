/* eslint-disable prettier/prettier */
import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import JobCard from '../../components/JobCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { useDispatch } from 'react-redux';
import { selectedJob } from '../../redux/features/jobSlice';

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  // console.log(data.results);
  const dispatch = useDispatch();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }


  const handleDetail = (id, name) => {
    navigation.navigate('Detail', {id});
    dispatch(selectedJob(name));
  };
  const renderJob = ({item}) => (
    <JobCard item={item} onDetail={() => handleDetail(item.id, item.short_name.split('-', 1))} />
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
