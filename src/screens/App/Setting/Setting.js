import {url} from 'inspector';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppLoader, Header, SettingCard} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  family,
  Setting_List,
  size,
  WP,
  checkConnected,
} from '../../../shared/exporter';

import {styles} from './styles';
import * as Types from '../../../redux/actions/types/auth_types';
import {logoutRequset, updateUserType} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon, Switch} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

const Setting = ({navigation}) => {
  const {userInfo, userType} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(userType == 'bestie' ? true : false);
  const [loading, setloading] = useState(false);

  const handleLogout = () => {
    // dispatch(logoutRequset())
    GoogleSignin.signOut();
    AsyncStorage.removeItem('usertoken');
    dispatch(logoutRequset());
    navigation.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
  };

  const handleNavigation = (item, index) => {
    if (item?.id == 1) {
      navigation.navigate('GetPaymentList');
    } else if (item?.id == 3) {
      navigation.navigate('TermsConditions');
    } else if (item?.id == 4) {
      navigation.navigate('PrivacyPolicy');
    } else if (item?.id == 6) {
      navigation.navigate('SupportList');
    }
  };

  const onChangeToggle = async value => {
    console.log('value', value);

    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        const data = new FormData();
        console.log('in', value);

        data.append('profile_type', value == false ? 'user' : 'bestie');
        const onSuccess = res => {
          console.log('SWITCH PROFILE==> setting', res?.data);

          if (
            res?.data?.profile_type == 'bestie' &&
            res?.data?.profile_completed == false
          ) {
            navigation.navigate('Bestietack', {
              screen: 'UpdateProfilePortfolio',
            });
          } else {
            navigation.navigate('MainStack');
            setChecked(value);
          }

          setloading(false);
        };
        const onFailure = res => {
          setloading(false);
        };
        console.log('dataaa', data);
        dispatch(updateUserType(data, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', networkText);
    }

    // dispatch({type: USER_TYPE, payload: value == 0 ? 'user' : 'bestie'});
  };

  // const onChangeToggle = val => {
  //   // Alert.alert('Are you sure to switch');
  //   setChecked(val);
  // };

  const renderItem = ({item, index}) => (
    <SettingCard title={item.title} onPress={() => handleNavigation(item)} />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Settings'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAwareScrollView>
        <SettingCard
          title={userInfo?.data?.first_name + ' ' + userInfo?.data?.last_name}
          icon={true}
          subtitle={true}
          userImage={{uri: userInfo?.profile_image}}
          onPress={() => navigation.navigate('EditProfileMenu')}
        />
        <View style={styles.listContainer}>
          <FlatList data={Setting_List} renderItem={renderItem} />
        </View>

        <View style={styles.switchContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '94%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.toggleText}>Switch to Bestie</Text>
            <Switch
              value={checked}
              onValueChange={value => onChangeToggle(value)}
              style={{marginTop: 10}}
              thumbColor="#fff"
              trackColor={{false: '#ccc', true: colors.org1}}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.bottonContainer}
          onPress={() => handleLogout()}>
          <Image
            source={appIcons.logout}
            resizeMode={'contain'}
            style={styles.iconStyle}
          />
          <Text style={styles.logOutTextStyle}>Logout</Text>
        </TouchableOpacity>
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Setting;
