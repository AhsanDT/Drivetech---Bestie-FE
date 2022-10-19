import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
export const GrayWrapper = ({icon, title, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewAllContainer}>
        {icon && (
          <Image source={appIcons.diamond} style={styles.diamondStyle} />
        )}
        <Text style={[styles.title, {marginHorizontal: icon ? WP('2') : 0}]}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.viewAllContainer} onPress={onPress}>
        <Text style={styles.viewAllText}>View all</Text>
        <Icon
          name="keyboard-arrow-right"
          type="MaterialIcons"
          color={colors.b1}
          size={25}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('93'),
    height: WP('56'),
    backgroundColor: colors.white2,
    padding: WP('4'),
    marginHorizontal: WP('3'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_16,
    color: colors.b6,
  },
  viewAllContainer: {
    flexDirection: 'row',
  },
  viewAllText: {
    fontFamily: family.Poppin_Medium,
    color: colors.b6,
    fontSize: size.text_12,
  },
  iconStyle: {
    marginTop: -4,
  },
  diamondStyle: {
    height: 15.71,
    width: 18.16,
    marginTop: WP('1'),
  },
});
