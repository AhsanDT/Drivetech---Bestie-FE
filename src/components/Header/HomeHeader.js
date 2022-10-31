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

export const HomeHeader = ({onPressImage, onPress, userImage}) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      {/* <MyStatusBar /> */}
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPressImage}>
          <Image source={userImage} style={styles.userStyle} />
        </TouchableOpacity>
        <SwitchSelector
          style={styles.switchContainer}
          initial={0}
          onPress={onPress}
          textColor={colors.g15}
          selectedColor={colors.g14}
          buttonColor={colors.p2}
          borderWidth={0}
          backgroundColor={colors.g14}
          hasPadding
          options={[
            {label: 'Besties', value: '1'},
            {label: 'Be A Bestie', value: '2'},
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
          borderRadius={12}
          height={38}
          valuePadding={2}
        />
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={appIcons.notification}
            style={styles.notificationStyle}
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
    paddingHorizontal: WP('3.85'),
    backgroundColor: colors.white,
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationStyle: {
    height: 24,
    width: 24,
    // justifyContent:'flex-end'
    marginHorizontal: WP('7'),
  },
  userStyle: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: '#ccc',
  },
  switchContainer: {
    // height: 35,
    width: 220,
    marginHorizontal: WP('4'),
  },
});
