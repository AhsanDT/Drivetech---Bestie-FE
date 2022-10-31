import {url} from 'inspector';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Header, SettingCard} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  family,
  Setting_List,
  size,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';
import * as Types from '../../../redux/actions/types/auth_types';
import {logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Setting = ({navigation}) => {
  const {userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();

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
  };

  const renderItem = ({item, index}) => (
    <SettingCard
      title={item.title}
      toggle={item?.selected}
      onPress={index => {
        // navigation.navigate(item?.route);
        handleNavigation(index);
      }}
    />
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
          title={userInfo?.data?.first_name + userInfo?.data?.last_name}
          icon={true}
          subtitle={true}
          userImage={{uri: userInfo?.profile_image}}
        />
        <View style={styles.listContainer}>
          <FlatList data={Setting_List} renderItem={renderItem} />
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Setting;
