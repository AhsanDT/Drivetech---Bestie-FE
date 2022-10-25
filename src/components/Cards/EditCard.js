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

const EditCard = ({onPressDelete, onPressEdit}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={appIcons.card} style={styles.cardImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.numberTextStyle}>*** *** *** *** 3456</Text>

        <Text style={styles.expiresTextStyle}>Expires 03/27</Text>
      </View>
      <TouchableOpacity onPress={onPressEdit}>
        <Image source={appIcons.edit} style={styles.editIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete}>
        <Image source={appIcons.delete} style={styles.deleteIcon} />
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
    height: 15,
    width: 15,
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
