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
import {Header, SettingCard} from '../../../components';
import {
  appIcons,
  colors,
  family,
  Setting_List,
  size,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';

const Setting = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SettingCard
      title={item.title}
      toggle={item?.selected}
      onPress={() => {
        navigation.navigate(item?.route);
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
        <SettingCard icon={true} subtitle={true} />
        <View style={styles.listContainer}>
          <FlatList data={Setting_List} renderItem={renderItem} />
        </View>

        <TouchableOpacity style={styles.bottonContainer}>
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
