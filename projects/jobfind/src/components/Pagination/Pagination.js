/* eslint-disable prettier/prettier */
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import Button from '../Button';

import styles from './Pagination.style';
import PickerComp from '../../Picker/PickerComp';

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
      <Button
        text="Previous"
        onPress={decreasePage}
        IconName="chevron-left"
        IconColor="white"
        IconLeft
      />
      <View style={styles.page_container}>
        <Text style={styles.page}>
          {page + 1} / {totalPage}
        </Text>
        <PickerComp
          style={styles.picker}
          page={page + 1}
          totalPage={totalPage}
        />
      </View>
      <Button
        text="Next"
        onPress={increasePage}
        IconName="chevron-right"
        IconColor="white"
      />
    </View>
  );
};

export default Pagination;
