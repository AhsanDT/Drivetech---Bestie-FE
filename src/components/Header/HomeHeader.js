import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  WP,
  size,
  colors,
  family,
  appIcons,
  appImages,
} from '../../shared/exporter';
import {MyStatusBar} from '..';
import SwitchSelector from 'react-native-switch-selector';
import {useSelector} from 'react-redux';

export const HomeHeader = ({
  onPressImage,
  onPress,
  userImage,
  value,
  disabled,
}) => {
  const [selected, setSelected] = useState(false);
  const {userType} = useSelector(state => state.auth);
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPressImage}>
          <Image source={userImage} style={styles.userStyle} />
        </TouchableOpacity>
        <SwitchSelector
          style={styles.switchContainer}
          initial={userType == 'user' ? 0 : 1}
          onPress={onPress}
          textColor={colors.g15}
          selectedColor={colors.g14}
          buttonColor={colors.p2}
          borderWidth={0}
          backgroundColor={colors.g14}
          hasPadding
          options={[
            {label: 'Besties', value: '0'},
            {label: 'Be A Bestie', value: '1'},
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
          borderRadius={12}
          height={38}
          valuePadding={2}
          disableValueChangeOnPress
          disabled={disabled}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={appIcons.search}
            style={styles.searchStyle}
            resizeMode={'contain'}
          />
          <Image
            source={appIcons.notification}
            style={[styles.notificationStyle]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: WP('3'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  notificationStyle: {
    height: 24,
    width: 24,
    marginHorizontal: WP('3'),
    alignSelf: 'center',
  },
  userStyle: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: '#ccc',
    marginLeft: WP('1.5'),
  },
  switchContainer: {
    width: 220,
    marginHorizontal: WP('5'),
  },
  searchStyle: {
    height: WP('6'),
    width: WP('6'),
    alignSelf: 'center',
  },
});
