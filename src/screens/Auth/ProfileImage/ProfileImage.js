import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
const ProfileImage = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  //Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          console.log('Response', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
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
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };
  //Open Camera
  const showCamera = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchCamera(image_options, response => {
          console.log('Response = ', response);
          setImage(response.assets[0].uri);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            console.log('');
            if (response.assets) {
              setImage(response.assets[0]);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View
        style={{
          padding: WP('3'),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AppButton
          title={'Back'}
          width={WP('35')}
          height={WP('13')}
          bgColor={colors.g9}
          textColor={colors.g10}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <AppButton
          title={'Next'}
          width={WP('35')}
          height={WP('13')}
          bgColor={!image ? colors.g1 : colors.b1}
          disabled={image ? false : true}
          //   onPress={() => {
          //     handleButtonPressed();
          //   }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProfileImage;
