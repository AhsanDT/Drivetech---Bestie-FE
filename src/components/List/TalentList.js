import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  colors,
  WP,
  platformOrientedCode,
  HP,
  family,
  size,
  appIcons,
} from '../../shared/exporter';

const TalentList = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Image
        source={appIcons.cancel}
        style={styles.tickIcon}
        resizeMode="contain"
      />
      <Text
        style={[
          styles.btnText,
          {
            color: colors.white,
            paddingLeft: WP('2'),
          },
        ]}>
        Wedding Photography
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: platformOrientedCode(HP('6'), HP('6')),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP('1'),
    marginBottom: HP('1'),
    padding: 5,
    alignSelf: 'flex-start',
    marginLeft: WP('3'),
    backgroundColor: colors.b1,
  },
  btnText: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: '#fff',
    padding: 2,
  },
  tickIcon: {
    height: 20,
    width: 20,
    marginLeft: 12,
  },
});

export {TalentList};
