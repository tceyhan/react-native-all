/* eslint-disable prettier/prettier */
import {View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import JobCard from '../../components/JobCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {selectedJob} from '../../redux/features/jobSlice';
import styles from './Home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation, route}) => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState();
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  // console.log(data.results);
  const dispatch = useDispatch();
  // const {users} = useSelector(state => state.auth);
  // console.log(users);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@USER');
      return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

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
    <JobCard
      item={item}
      onDetail={() => handleDetail(item.id, item.categories[0].name)}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{user.userFullName}</Text>
      <FlatList
        data={data.results}
        keyExtractor={item => item.id}
        renderItem={renderJob}
      />
      <Pagination page={page} setPage={setPage} data={data} loading={loading} />
    </View>
  );
};

export default Home;
