import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {Header, SettingCard} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {styles} from './styles';

const Setting = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Settings'} backIcon={true} onPressBack={() => {}} />
      <SettingCard />
      <View
        style={{
          width: WP('95'),
          padding: WP('2'),
          height: 443,
          backgroundColor: colors.white,
          alignSelf: 'center',
          borderRadius: 13,
        }}></View>
    </SafeAreaView>
  );
};

export default Setting;
