import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const CreditCard = ({title, subTitle, show, onPress}) => {
  return (
    <SafeAreaView>
      {show ? (
        <TouchableOpacity style={styles.mainContainer2} onPress={onPress}>
          <View style={styles.contentContainer}>
            <Text style={styles.creditCardText}>{subTitle}</Text>
            <Text style={styles.visaCardStyle}>
              Visa, MasterCard, American Express
            </Text>
          </View>
          <View style={styles.tickIconContainer}>
            <Image source={appIcons.tick} style={styles.tickIconStyle} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
          <Text style={styles.cardNameStyle}>{title}</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('3'),
    backgroundColor: colors.white3,
    width: WP('90'),
    height: 47,
    alignSelf: 'center',
    marginVertical: WP('1'),
    borderRadius: 5,
  },
  cardNameStyle: {
    color: colors.gray3,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    lineHeight: 24,
  },
  mainContainer2: {
    width: WP('90'),
    padding: WP('1'),
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: WP('3'),
    marginTop: 2,
  },
  contentContainer: {
    width: WP('70'),
    paddingHorizontal: WP('5'),
    paddingVertical: WP('3'),
  },

  creditCardText: {
    fontFamily: family.Poppin_Medium,
    color: colors.b6,
    fontSize: size.text_14,
  },
  visaCardStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
    color: colors.g20,
    lineHeight: 20,
  },
  tickIconContainer: {
    alignSelf: 'center',
    paddingHorizontal: WP('8'),
  },
  tickIconStyle: {
    width: 15,
    height: 11,
    tintColor: colors.bl2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export {CreditCard};
