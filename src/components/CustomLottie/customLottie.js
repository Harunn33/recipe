/* eslint-disable no-lone-blocks */
import React from 'react';
import Lottie from 'lottie-react-native';
import CONSTANTS from '../../constants';

const CustomLottie = ({error}) => {
  {
    return error === true ? (
      <Lottie
        source={require('../../assets/error.json')}
        autoPlay
        style={{backgroundColor: CONSTANTS.COLORS.BG}}
        resizeMode={'contain'}
      />
    ) : (
      <Lottie
        source={require('../../assets/loading.json')}
        autoPlay
        style={{backgroundColor: CONSTANTS.COLORS.BG}}
        resizeMode={'center'}
      />
    );
  }
};

export default CustomLottie;
