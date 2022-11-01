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

const EditCard = ({
  onPressDelete,
  onPressEdit,
  month,
  year,
  number,
  source,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={source || appIcons.card}
        style={styles.cardImage}
        resizeMode={'contain'}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.numberTextStyle}>{'*** *** *** ***' + number}</Text>

        <Text style={styles.expiresTextStyle}>
          Expires {month + '/' + year}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressEdit}>
        <Image source={appIcons.edit} style={styles.editIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete}>
        <Image
          source={appIcons.delete}
          style={styles.deleteIcon}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: WP('4'),
    flexDirection: 'row',
    backgroundColor: colors.white2,
    marginVertical: WP('1'),
    marginBottom: WP('3'),
    width: WP('85'),
    alignSelf: 'center',
    borderRadius: 6,
    alignItems: 'center',
  },

  contentContainer: {
    paddingHorizontal: WP('5'),
    width: WP('55'),
  },
  cardImage: {
    height: 28,
    width: 42,
  },
  editIcon: {
    height: 15,
    width: 15,
  },
  deleteIcon: {
    height: WP('5'),
    width: WP('4'),
    marginHorizontal: 10,
  },
  numberTextStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: colors.b7,
  },
  expiresTextStyle: {
    fontFamily: family.Poppin_Light,
    fontSize: size.text_10,
    color: colors.b7,
  },
});

export {EditCard};
