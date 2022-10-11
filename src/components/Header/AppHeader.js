import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';
import {MyStatusBar} from '..';

export const AppHeader = ({title, backIcon = false, onPressBack}) => {
  return (
    <>
      {/* <MyStatusBar /> */}
      <View style={styles.mainContainer}>
        {backIcon && (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressBack}>
            <Image
              source={appIcons.backArrow}
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
    paddingVertical: WP('4'),
    paddingHorizontal: WP('3.85'),
    // justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginBottom: WP('3')
  },
  logoTxtStyle: {
    left: WP('2.3'),
    color: colors.b1,
    fontSize: size.text_26,
    fontFamily: family.Poppin_Medium,
    fontWeight: 'bold',
    // marginBottom: WP('4'),
  },

  ArrowIcon: {
    width: 36,
    height: 16,
    left: WP('2.3'),
    marginBottom: WP('8'),
  },
});
