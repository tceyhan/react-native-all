/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const PickerComp = ({totalPage}) => {
  const [selectedPage, setSelectedPage] = useState();
  const pickerRef = useRef();

  const totalPageArr = [];
  for (let i = 1; i <= totalPage; i++) {
    totalPageArr.push(i);
  }
  console.log(totalPageArr);

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <Picker
      ref={pickerRef}
      selectedValue={selectedPage}
      onValueChange={(itemValue, itemIndex) => setSelectedPage(itemValue)}>
      {totalPageArr.map(pageNumber => (
        <Picker.Item
          label={pageNumber.toString()}
          value={pageNumber}
          key={pageNumber}
        />
      ))}
    </Picker>
  );
};

export default PickerComp;
