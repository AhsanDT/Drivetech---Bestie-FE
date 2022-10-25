import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const ChatCard = ({date, status, token, message, onPress, time}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.contentContainer2}>
        <Image
          source={appIcons.appIcon}
          style={styles.appIconStyle}
          resizeMode={'contain'}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.dateTextStyle}>
            {date}
            <Text>{time}</Text>
          </Text>
          <Text style={styles.tokenTextStyle}>{token}</Text>
        </View>
      </View>
      <Text ellipsizeMode="tail" numberOfLines={3} style={styles.logTextStyle}>
        {message}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('4'),
    width: WP('90'),
    borderRadius: 10,
    marginHorizontal: WP('5'),
    marginVertical: WP('3'),
    alignSelf: 'center',
  },

  contentContainer: {
    width: WP('70'),
    paddingHorizontal: WP('4'),
    paddingVertical: WP('1'),
  },
  contentContainer2: {
    flexDirection: 'row',
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
    top: 1,
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
    marginTop: 7,
  },

  appIconStyle: {
    height: 50,
    width: 50,
  },
});

export {ChatCard};
