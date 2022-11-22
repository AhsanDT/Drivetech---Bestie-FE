import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Alert} from 'react-native';
import {HomeHeader, AppLoader} from '../../../../components';
import {BestieTopTab} from '../../../../navigation/TopTab/BestieTopTab';
import {EndUserTopTab} from '../../../../navigation/TopTab/EndUserTopTab';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {updateUserType} from '../../../../redux/actions';
import {checkConnected} from '../../../../shared/exporter';
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}
const Dashboard = ({navigation}) => {
  const [tab, setTab] = useState(false);
  const dispatch = useDispatch();
  const {userInfo, userType} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);
  const [role, setrole] = useState(userType == 'user' ? 0 : 1);

  const onChangeTabConfirm = async value => {
    setrole(value);

    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        const data = new FormData();
        data.append('profile_type', value == 0 ? 'user' : 'bestie');
        const onSuccess = res => {
          if (
            res?.data?.profile_type == 'bestie' &&
            res?.data?.profile_completed == false
          ) {
            navigation.navigate('Bestietack', {
              screen: 'UpdateProfilePortfolio',
            });
          } else {
            navigation.navigate('MainStack');
          }

          setloading(false);
        };
        const onFailure = res => {
          setloading(false);
        };
        dispatch(updateUserType(data, onSuccess, onFailure));
      } catch (error) {}
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />

      <AppLoader loading={loading} />
      <HomeHeader
        show={userType == 'user' ? true : false}
        onPressImage={() => {
          navigation.navigate('Bestietack', {screen: 'Setting'});
        }}
        onPress={value =>
          value == role
            ? Alert.alert(
                'Alert',
                `You are already ${
                  userType == 'bestie' ? 'Bestie' : 'End User.'
                }`,
              )
            : onChangeTabConfirm(value)
        }
        userImage={{uri: userInfo?.profile_image}}
      />
      {userType == 'bestie' ? <BestieTopTab /> : <EndUserTopTab />}
    </SafeAreaView>
  );
};

export default Dashboard;
