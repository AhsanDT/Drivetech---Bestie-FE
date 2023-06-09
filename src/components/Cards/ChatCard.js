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

const ChatCard = ({
  date,
  status,
  token,
  message,
  onPress,
  time,
  source,
  image,
  userImage,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.contentContainer2}>
        <Image
          source={userImage}
          style={styles.appIconStyle}
          resizeMode={'cover'}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.dateTextStyle}>
            {date}
            <Text>{time}</Text>
          </Text>
          <Text style={styles.tokenTextStyle}>{token}</Text>
        </View>
      </View>
      {message && (
        <Text
          ellipsizeMode="tail"
          numberOfLines={3}
          style={styles.logTextStyle}>
          {message}
        </Text>
      )}

      {image && <Image source={image} style={styles.imageStyle} />}
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
    height: WP('13'),
    width: WP('13'),
    backgroundColor: '#ccc',
    borderRadius:WP("13")/2,
    resizeMode:"contain"
  },
  imageStyle: {
    height: WP('40'),
    width: WP('75'),
    borderRadius: WP('4'),
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: WP('1'),
  },
});

export {ChatCard};
