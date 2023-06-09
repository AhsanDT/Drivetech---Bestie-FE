import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  appIcons,
  colors,
  family,
  scrHeight,
  size,
  WP,
} from '../../shared/exporter';
import {AppButton} from '../AppButton/AppButton';

const DeleteModal = ({
  tabRef,
  onPressCancel,
  onPressDelete,
  item,
  month,
  year,
  number,
  bank,
}) => {
  return (
    <SafeAreaView>
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.inputContentContainer,
        }}>
        <View style={styles.borderStyle} />
        <View style={styles.contentContainer}>
          <Image
            source={bank ? appIcons.buildingBank : appIcons.cross}
            style={styles.crossIconStyle}
            resizeMode={'contain'}
          />
          <Text style={styles.cardNumberStyle}>
            {'*** *** *** ***' + number}
          </Text>
          {month && (
            <Text style={styles.expiresStyle}>
              {' '}
              Expires {month + '/' + year}
            </Text>
          )}
        </View>
        <View style={styles.spacer} />
        <View style={styles.secondContentContainer}>
          <Text style={styles.cardTextStyle}>
            Are you sure you want to delete{'\n'}this{' '}
            {bank ? 'bank info' : 'card'}?
          </Text>
          <AppButton
            bgColor={colors.red2}
            width={WP('75')}
            title={'Delete'}
            onPress={onPressDelete}
          />
          <TouchableOpacity onPress={onPressCancel} activeOpacity={0.7}>
            <Text style={styles.cancelTextStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContentContainer: {
    flex: 1.2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  borderStyle: {
    borderWidth: 1.5,
    borderColor: colors.g20,
    alignSelf: 'center',
    width: 36,
    marginTop: 5,
  },
  contentContainer: {
    paddingVertical: WP('5'),
  },
  crossIconStyle: {
    width: 90,
    height: 83,
    alignSelf: 'center',
  },
  cardNumberStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: colors.b1,
    paddingTop: 10,
    textAlign: 'center',
  },
  expiresStyle: {
    fontSize: size.text_12,
    fontFamily: family.Poppin_Regular,
    color: colors.b1,
    alignSelf: 'center',
    lineHeight: 20,
    paddingTop: 8,
  },

  spacer: {
    width: WP('90'),
    borderWidth: 1,
    borderColor: colors.black,
    marginTop: 5,
  },
  secondContentContainer: {
    paddingVertical: WP('6'),
  },

  cardTextStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: colors.b1,
    textAlign: 'center',
    marginBottom: WP('6'),
  },

  cancelTextStyle: {
    fontFamily: family.Poppin_Medium,
    color: colors.red5,
    textAlign: 'center',
    fontSize: size.text_14,
    lineHeight: 24,
    padding: WP('6'),
  },
});

export {DeleteModal};
