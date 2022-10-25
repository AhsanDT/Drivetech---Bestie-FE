import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';

const SettingCard = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={appImages.user} style={styles.userStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>
          Blair McLurkin{'\n'}
          <Text style={styles.editStyle}>Edit Profile</Text>
        </Text>
      </View>
      <Image
        source={appIcons.rightarrow}
        style={styles.rightarrowStyle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export {SettingCard};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('4'),
    backgroundColor: colors.white,
    width: WP('95'),
    borderRadius: 13,
    // elevation: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
  },
  userStyle: {
    height: 33,
    width: 33,
    borderRadius: 33,
  },
  textContainer: {
    width: WP('70'),
    paddingHorizontal: WP('4'),
  },
  nameStyle: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_14,
    lineHeight: 20,
    color: colors.b6,
  },
  editStyle: {
    fontFamily: family.Poppin_Light,
    fontSize: size.text_10,
    lineHeight: 15,
    color: colors.black2,
  },
  rightarrowStyle: {
    width: WP('6.5'),
    height: WP('5'),
  },
});
