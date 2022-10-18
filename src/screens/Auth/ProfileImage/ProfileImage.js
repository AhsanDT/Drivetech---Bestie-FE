import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const ProfileImage = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  //Handlers
  const showGallery = () => {
    setShow(false);
    try {
      launchImageLibrary(image_options, response => {
        if (response.didCancel) {
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.errorCode) {
          console.log('User tapped custom button: ', response.errorCode);
        } else {
          console.log('Response---', response.assets[0]);
          if (response.assets) {
            setImage(response.assets[0]);
          }
        }
      });
    } catch (error) {}
  };
  //Open Camera
  const showCamera = () => {
    setShow(false);
    try {
      launchCamera(image_options, response => {
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
        } else {
          console.log('');
          if (response.assets) {
            setImage(response.assets[0]);
          }
        }
      });
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <AppHeader title={'Add Your\nProfile Photo'} />
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.uploadImageContainer}
            activeOpacity={0.7}
            onPress={() => {
              setShow(true);
            }}>
            <Image
              source={image === '' ? appIcons.camera : image}
              style={image ? styles.uriImageContainer : styles.cameraContainer}
            />
          </TouchableOpacity>
        </View>
        <ImagePickerModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressCamera={() => showCamera()}
          onPressGallery={() => showGallery()}
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title={'Back'}
            width={WP('35')}
            height={WP('13')}
            bgColor={colors.g8}
            textColor={colors.g9}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <AppButton
            title={'Next'}
            width={WP('35')}
            height={WP('13')}
            bgColor={!image ? colors.g5 : colors.b1}
            disabled={image ? false : true}
            onPress={() => {
              navigation.navigate('UploadImage');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ProfileImage;
