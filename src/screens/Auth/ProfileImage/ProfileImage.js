import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import * as types from '../../../redux/actions/types/auth_types';
import {updateSignupObject} from '../../../redux/actions';

const ProfileImage = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const {signupObject} = useSelector(state => state.auth);
  const dispatch = useDispatch();

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
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
    setShow(false);
    try {
      launchCamera(image_options, response => {
        // setImage(response.assets[0].uri);
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
        } else {
          if (response.assets) {
            setImage(response.assets[0]);
          }
        }
      });
    } catch (error) {}
  };

  const handleNavigation = () => {
    dispatch(updateSignupObject({profilePhoto: image}));

    navigation.navigate('ShowInterest');
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'ID Camera Permission',
          message:
            'ID App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <StatusBar
          backgroundColor={'#fff'}
          translucent={false}
          barStyle={'dark-content'}
        />
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
              resizeMode="contain"
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
            onPress={() => handleNavigation()}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ProfileImage;
