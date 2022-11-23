import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors, WP, family, appIcons} from '../../shared/exporter';
import PropTypes from 'prop-types';

export const DiscardModal = ({
  show,
  onPressHide,
  onPressCancel,
  onPressDiscard,
  onPressUpdate,
}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          {onPressUpdate && (
            <TouchableOpacity onPress={onPressUpdate} style={styles.btn}>
              <View style={styles.textContainer}>
                <Text style={styles.btnText}>Save Update</Text>
              </View>
            </TouchableOpacity>
          )}
          {onPressUpdate && <View style={styles.separator} />}
          <TouchableOpacity onPress={onPressDiscard} style={styles.btn}>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Discard</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressCancel} style={styles.btn}>
            <View style={styles.textContainer}>
              <Text
                style={[styles.btnText, {fontFamily: family.Poppin_SemiBold}]}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
DiscardModal.propTypes = {
  show: PropTypes.bool,
  onPressHide: PropTypes.func,
  onPressDiscard: PropTypes.func,
  onPressCancel: PropTypes.func,
  onPressUpdate: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: WP('90'),
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.g1,
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: WP('5'),
    padding: WP('3'),
  },
  btnText: {
    fontSize: WP('4'),
    // fontWeight: '700',
    color: colors.bl3,
    paddingVertical: WP('2'),
    textAlign: 'center',
    fontFamily: family.Poppin_Regular,
  },
  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',
    paddingVertical: WP('3'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
