import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../../components';

const Test = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'White',
      }}>
      <Header title={'Profile'} backIcon={true} />
    </View>
  );
};
export default Test;
