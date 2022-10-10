import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {
  HP,
  platformOrientedCode,
  WP,
  colors,
  appIcons,
  family,
  size,
} from '../../shared/exporter';

const ShowInterestButton = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainView,
        {backgroundColor: item.selected ? colors.b1 : colors.white},
      ]}
      onPress={onPress}>
      {item.selected && (
        <Image
          source={appIcons.tick}
          style={styles.tickIcon}
          resizeMode="contain"
        />
      )}
      <Text
        style={[
          styles.btnText,
          {
            color: item.selected ? colors.white : colors.b1,
            paddingLeft: WP('2'),
          },
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export {ShowInterestButton};

const styles = StyleSheet.create({
  mainView: {
    height: platformOrientedCode(HP('5'), HP('5')),
    borderColor: colors.g2,
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP('1.5'),
    padding: 5,
    alignSelf: 'flex-start',
    marginLeft: WP('3'),
  },
  btnText: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: '#fff',
    padding: 3,
  },
  tickIcon: {
    height: 20,
    width: 20,
    marginLeft: 12,
  },
});
