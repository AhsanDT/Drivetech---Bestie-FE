import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {HomeHeader} from '../../../../components';
import {BestieTopTab} from '../../../../navigation/TopTab/BestieTopTab';
import {EndUserTopTab} from '../../../../navigation/TopTab/EndUserTopTab';
import {styles} from './styles';

const Dashboard = ({navigation}) => {
  const [tab, setTab] = useState(false);
  console.log('value', tab);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <HomeHeader
        onPressImage={() => {
          navigation.navigate('Bestietack', {screen: 'Setting'});
        }}
        onPress={() => setTab(!tab)}
      />
      {tab ? <BestieTopTab /> : <EndUserTopTab />}
    </SafeAreaView>
  );
};

export default Dashboard;
