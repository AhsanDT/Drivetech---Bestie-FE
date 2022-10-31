import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {HomeHeader} from '../../../../components';
import {BestieTopTab} from '../../../../navigation/TopTab/BestieTopTab';
import {EndUserTopTab} from '../../../../navigation/TopTab/EndUserTopTab';
import {styles} from './styles';

const Dashboard = ({navigation}) => {
  const [tab, setTab] = useState(false);
  const {userInfo} = useSelector(state => state.auth);

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
        userImage={{uri: userInfo?.profile_image}}
      />
      {tab ? <BestieTopTab /> : <EndUserTopTab />}
    </SafeAreaView>
  );
};

export default Dashboard;
