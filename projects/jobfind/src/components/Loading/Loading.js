/* eslint-disable prettier/prettier */

import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie source={require('../../assets/97930-loading.json')} autoPlay loop />
  );
};

export default Loading;
