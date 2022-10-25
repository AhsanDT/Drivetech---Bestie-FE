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

export const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
  onPressCancel,
}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image source={appIcons.camera} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Take Image from Camera</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image
                source={appIcons.gallery}
                style={[styles.imageStyle, {tintColor: colors.gray}]}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Pick Image from Gallery</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressCancel} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image
                source={appIcons.cancel}
                style={[
                  styles.imageStyle,
                  {tintColor: colors.gray, height: 20, width: 20},
                ]}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
ImagePickerModal.propTypes = {
  show: PropTypes.bool,
  onPressHide: PropTypes.func,
  onPressGallery: PropTypes.func,
  onPressCamera: PropTypes.func,
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
  },
  btnText: {
    fontSize: WP('4'),
    fontWeight: '700',
    color: colors.g3,
    paddingVertical: WP('1'),
    textAlign: 'left',
  },
  imageStyle: {
    height: 25,
    width: 25,
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
