import React from 'react';
import {View} from 'react-native';

import {Header} from '../../components/Header';
import {FoodList} from '../../components/FoodList';
import {CafeDescription} from '../../components/CafeDescription';

import {s} from './styles';

export const Order = () => {
  return (
    <View style={s.container}>
      <Header />
      <CafeDescription />
      <FoodList />
    </View>
  );
};
