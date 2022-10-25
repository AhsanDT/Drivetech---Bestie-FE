import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const SupportCard = ({date, status, token, message, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image
        source={appIcons.appIcon}
        style={styles.appIconStyle}
        resizeMode={'contain'}
      />

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.dateTextStyle}>{date}</Text>
          <Text style={styles.pendingTextStyle}>{status}</Text>
        </View>
        <Text style={styles.tokenTextStyle}>{token}</Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={3}
          style={styles.logTextStyle}>
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('4'),
    backgroundColor: colors.g2,
    width: WP('90'),
    borderRadius: 10,
    marginHorizontal: WP('5'),
    marginVertical: WP('3'),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contentContainer: {
    width: WP('70'),
    paddingHorizontal: WP('3'),
  },

  textContainer: {
    flexDirection: 'row',
    width: WP('65'),
    // backgroundColor:'red',
    justifyContent: 'space-between',
  },

  dateTextStyle: {
    fontFamily: family.Poppin_Regular,
    color: colors.b7,
    fontSize: size.text_10,
    lineHeight: 12,
  },

  tokenTextStyle: {
    fontFamily: family.Poppin_Medium,
    color: colors.bl,
    fontSize: size.text_14,
    lineHeight: 20,
  },

  pendingTextStyle: {
    color: colors.org,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_10,
    lineHeight: 12,
  },

  logTextStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
    color: colors.b7,
    lineHeight: 18,
  },

  appIconStyle: {
    height: 50,
    width: 50,
  },
});

export {SupportCard};
