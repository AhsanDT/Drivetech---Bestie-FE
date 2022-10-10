import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const AuthFooter = ({onPress, title, subtitle}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={styles.hitSlop}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.footerText}>
        {title}
        <Text
          onPress={onPress}
          style={[styles.footerText, {fontFamily: family.Poppin_Bold}]}>
          {subtitle}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  footerText: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    textAlign: 'center',
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
    color: colors.b3,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});
