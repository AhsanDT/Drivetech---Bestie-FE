import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {appImages, colors, family, size, WP} from '../../shared/exporter';
const ImageCard = ({number, name, height}) => {
  return (
    <ImageBackground
      style={[styles.container, {height: WP('37') || height}]}
      source={appImages.user}
      imageStyle={styles.imageStyle}>
      {number && (
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{number}</Text>
        </View>
      )}

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomTextStyle}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('30'),
    marginHorizontal: WP('5'),
    marginVertical: WP('5'),
  },
  imageStyle: {
    borderRadius: WP('3'),
  },
  textContainer: {
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('8'),
    backgroundColor: colors.yellow,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('2'),
    marginVertical: WP('1'),
  },
  textStyle: {
    fontFamily: family.Poppin_Regular,
    color: colors.white,
    fontSize: size.text_10,
  },
  bottomTextContainer: {
    padding: WP('2'),
    marginTop: WP('13'),
  },
  bottomTextStyle: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_14,
    color: colors.white,
  },
});

export {ImageCard};
