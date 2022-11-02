import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';

const SupportCard = ({
  date,
  status,
  ticketnumber,
  description,
  onPress,
  source = false,
  userImage,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image
        source={userImage}
        style={styles.appIconStyle}
        resizeMode={'cover'}
      />

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.dateTextStyle}>{date}</Text>
          <Text style={styles.pendingTextStyle}>{status}</Text>
        </View>
        <Text style={styles.tokenTextStyle}>{ticketnumber}</Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={3}
          style={styles.logTextStyle}>
          {description}
        </Text>
        {source && (
          <Image
            source={source}
            resizeMode={'cover'}
            style={{
              height: WP('40'),
              width: WP('80'),
              marginTop: WP('6'),
              borderRadius: WP('4'),
              overflow: 'hidden',
              marginLeft: WP('-15'),
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('4'),
    backgroundColor: colors.white2,
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
    paddingTop: 2,
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
    height: WP('13'),
    width: WP('13'),
    backgroundColor: '#ccc',
    borderRadius: WP('13') / 2,
    resizeMode: 'contain',
  },
});

export {SupportCard};
