/* eslint-disable prettier/prettier */

import React from 'react';
import Lottie from 'lottie-react-native';

const Error = () => {
  return (
    <Lottie source={require('../../assets/error.json')} autoPlay loop />
  );
};

export default Error;
