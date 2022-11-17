/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Home.style';
import JobCard from '../../components/JobCard';
import Button from '../../components/Button';

const Home = () => {
  const [page, setPage] = useState(1);
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  console.log(data.results);

  const Pagination = () => {
    // const totalPage = data.page_count / 20;
    const increasePage = () => {
      return setPage(page + 1);
    };
    const decreasePage = () => {
      return page === 1 ? setPage(1) : setPage(page - 1);
    };
    return (
      <View style={styles.container}>
        <Button text="Previos" onPress={decreasePage} />
        <Text style={styles.page}>{page} / 100</Text>
        <Button text="Next" onPress={increasePage} />
      </View>
    );
  };
 const renderJob = ({item}) => <JobCard item={item} />;
  return (
    <View>
      <FlatList
       data={data.results}
      //  keyExtractor={({item})=>item[item.index]}
       renderItem={renderJob}
       ListFooterComponent={Pagination}

      />
    </View>
  );
};

export default Home;
