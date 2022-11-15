/* eslint-disable prettier/prettier */

import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie source={require('../../assets/loading.json')} autoPlay loop />
  );
};

export default Loading;
