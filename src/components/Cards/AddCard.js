import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const AddCard = ({onPressCard, title, source, tintColor}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.7}
      onPress={onPressCard}>
      <Image
        source={source ? source : appIcons.card}
        style={[styles.cardIcon, {tintColor: source ? tintColor : null}]}
        resizeMode={'contain'}
      />

      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: WP('4'),
    flexDirection: 'row',
    backgroundColor: colors.white2,
    width: WP('85'),
    alignSelf: 'center',
    borderRadius: 6,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.gray2,
    alignItems: 'center',
  },
  cardIcon: {
    width: 42,
    height: 28,
  },
  cardText: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: colors.b1,
    marginHorizontal: WP('4'),
  },
});

export {AddCard};
