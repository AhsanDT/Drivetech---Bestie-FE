import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';
import {MyStatusBar} from '..';

export const Header = ({title, backIcon = false, onPressBack}) => {
  return (
    <>
      {/* <MyStatusBar /> */}
      <View style={styles.mainContainer}>
        {backIcon && (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressBack}>
            <Image
              source={appIcons.dropback}
              resizeMode={'contain'}
              style={styles.ArrowIcon}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.logoTxtStyle}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: WP('7'),
    paddingHorizontal: WP('3.85'),
    backgroundColor: colors.white,
    marginBottom: WP('3'),
  },
  logoTxtStyle: {
    left: WP('7'),
    color: colors.b1,
    fontSize: size.text_14,
    fontFamily: family.Poppin_Medium,
  },

  ArrowIcon: {
    width: 8,
    height: 18,
    left: WP('2.3'),
    // marginBottom: WP('8'),
  },
});
