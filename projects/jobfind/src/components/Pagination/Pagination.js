/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './Pagination.style';

const Pagination = ({page, setPage, data}) => {
    const totalPage = Math.floor(data.page_count / 20);
    const increasePage = () => {
      return setPage(page + 1);
    };
    const decreasePage = () => {
      return page === 0 ? setPage(0) : setPage(page - 1);
    };
    return (
      <View style={styles.pagination_container}>
        {page > 0 && <Icon name="chevron-left" size={30} color="#005ac1" onPress={decreasePage} />}
        <Button style={styles.button} text="Previous" onPress={decreasePage} />
        <View style={styles.page_container}>
          <Text style={styles.page}>
            {page + 1 } / {totalPage}
          </Text>
        </View>
        <Button style={styles.button} text="Next" onPress={increasePage} />
        {page !== totalPage && <Icon name="chevron-right" size={30} color="#005ac1" onPress={increasePage} />}
      </View>
    );
  };

export default Pagination;
