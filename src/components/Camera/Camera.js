import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const Camera = ({source, onPress, item}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={[styles.checkBoxIconContainer, {marginHorizontal: WP('3')}]}>
        <Image
          source={appIcons.checkbox}
          style={[
            styles.checkBoxIcon,
            {tintColor: item?.selected ? colors.bl : null},
          ]}
        />
      </View>
      {source && (
        <Image
          source={source}
          resizeMode={'contain'}
          style={[
            styles.iconStyle,
            {tintColor: item?.selected ? colors.b1 : colors.g3},
          ]}
        />
      )}

      <Text
        style={[
          styles.titleStyle,
          {color: item?.selected ? colors.b1 : colors.g3},
          {
            marginTop: WP('2'),
            marginHorizontal: source ? WP('2') : 0,
          },
        ]}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: WP('3'),
    flexDirection: 'row',
  },
  checkBoxIconContainer: {
    alignSelf: 'center',
    marginTop: WP('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxIcon: {
    height: 15,
    width: 15,
  },
  iconStyle: {
    height: 39,
    width: 39,
    marginHorizontal: WP('1'),
  },
  titleStyle: {
    alignSelf: 'center',
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
  },
});

export {Camera};
