import React from 'react';
import {View, Text} from 'react-native';
import {HomeHeader} from '../../../../components';
import {colors, family} from '../../../../shared/exporter';
import {styles} from './styles';

const MySchedule = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: colors.b1,
          fontFamily: family.Poppin_Medium,
        }}>
        My Schedule
      </Text>
      {/* <HomeHeader
      // onPressImage={() => {
      //   navigation.navigate('BestieStack', {screen: 'Setting'});
      // }}
      // onPress={() => setTab(!tab)}
      /> */}
    </View>
  );
};

export default MySchedule;
