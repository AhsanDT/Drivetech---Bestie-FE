import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {HomeHeader} from '../../../../components';
import {BestieTopTab} from '../../../../navigation/TopTab/BestieTopTab';
import {EndUserTopTab} from '../../../../navigation/TopTab/EndUserTopTab';
import Login from '../../../Auth/Login';
import Setting from '../../Setting';
import {styles} from './styles';

const Dashboard = ({navigation}) => {
  const [tab, setTab] = useState(false);
  console.log('value', tab);
  return (
    <SafeAreaView style={styles.mainContainer}>
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
