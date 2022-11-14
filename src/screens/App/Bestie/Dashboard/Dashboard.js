import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Alert} from 'react-native';
import {HomeHeader} from '../../../../components';
import {BestieTopTab} from '../../../../navigation/TopTab/BestieTopTab';
import {EndUserTopTab} from '../../../../navigation/TopTab/EndUserTopTab';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {USER_TYPE} from '../../../../redux/actions/types/auth_types';

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

const Dashboard = ({navigation}) => {
  const [tab, setTab] = useState(false);
  const dispatch = useDispatch();
  const {userInfo, userType} = useSelector(state => state.auth);
  const [currentTab, setCurrentTab] = useState(0);

  console.log('type     ', userType);

  const onChangeTab = value => {
    // console.log('value ', value);
    if (value == 1) setCurrentTab(1);
    else setCurrentTab(0);
  };

  const onChangeTabConfirm = value => {
    dispatch({type: USER_TYPE, payload: value == 0 ? 'user' : 'bestie'});
    let newVal = value;
    // console.log('val    ', value);
    // console.log('state   ', currentTab);
    // if (value == currentTab) return;
    // Alert.alert(
    //   '',
    //   'Are you sure you want to Switch?',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => {
    //         console.log('working');
    //         if (value == 1) setCurrentTab(0);
    //         else setCurrentTab(1);
    //         handleForceupdateMethod();
    //       },
    //       style: 'cancel',
    //     },
    //     {text: 'OK', onPress: () => onChangeTab(value)},
    //   ],
    //   {cancelable: false},
    // );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {console.log('re render     ', currentTab)}
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <HomeHeader
        onPressImage={() => {
          navigation.navigate('Bestietack', {screen: 'Setting'});
        }}
        onPress={value => onChangeTabConfirm(value)}
        userImage={{uri: userInfo?.profile_image}}
      />
      {tab ? <BestieTopTab /> : <EndUserTopTab />}
    </SafeAreaView>
  );
};

export default Dashboard;
