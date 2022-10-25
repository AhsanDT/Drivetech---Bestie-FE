import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {HomeHeader} from '../../../components';
import {TopTab} from '../../../navigation/TopTab/TopTab';
import {styles} from './styles';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HomeHeader title={'Hamad'} />
      <TopTab />
      <Text>Hamad</Text>
    </SafeAreaView>
  );
};

export default Dashboard;
