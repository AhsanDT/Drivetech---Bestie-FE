import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import * as types from '../../../redux/actions/types/auth_types';
import {useDispatch, useSelector} from 'react-redux';
import {updateSignupObject} from '../../../redux/actions';
const UploadImage = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [frontImage, setFrontImage] = useState('');
  const [imageStatus, setImageStatus] = useState('');
  const [backImage, setBackImage] = useState('');
  const dispatch = useDispatch();
  const {signupObject} = useSelector(state => state.auth);

  //Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          console.log('Response', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            console.log('Response---', response?.assets[0]);
          }
          if (response?.assets) {
            if (imageStatus == 'back') {
              setBackImage(response?.assets[0]);
              // updateSignupObject({idCardBack: response?.assets[0]});
              // updateSignupObject({idCardBack: backImage});
            } else {
              setFrontImage(response?.assets[0]);
              // updateSignupObject({idCardfront: response?.assets[0]});
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };
  // Open Camera
  const showCamera = () => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
    setShow(false);
    setTimeout(() => {
      try {
        launchCamera(image_options, response => {
          console.log('Response', response);
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
          } else {
          }
          if (response?.assets) {
            if (imageStatus == 'back') {
              setBackImage(response?.assets[0]);
              // updateSignupObject({idCardBack: backImage});
            } else {
              setFrontImage(response?.assets[0]);
              // updateSignupObject({idCardfront: response?.assets[0]});
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
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
  const handleNavigation = () => {
    dispatch(updateSignupObject({idCardfront: frontImage}));
    dispatch(updateSignupObject({idCardBack: backImage}));
    setTimeout(() => {
      navigation.navigate('ImageVerification');
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={'Upload Your\nID Photo'} />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.textStyle}>Front</Text>
          <TouchableOpacity
            style={styles.uploadImageContainer}
            activeOpacity={0.7}
            onPress={() => {
              setShow(true);
              setImageStatus('front');
            }}>
            <Image
              source={frontImage === '' ? appIcons.camera : frontImage}
              resizeMode="contain"
              style={
                frontImage ? styles.uriImageContainer : styles.cameraContainer
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.textStyle}>Back</Text>
          <TouchableOpacity
            style={styles.uploadImageContainer}
            activeOpacity={0.7}
            onPress={() => {
              setShow(true);
              setImageStatus('back');
            }}>
            <Image
              source={backImage === '' ? appIcons.camera : backImage}
              resizeMode="contain"
              style={
                backImage ? styles.uriImageContainer : styles.cameraContainer
              }
            />
          </TouchableOpacity>
        </View>
        <ImagePickerModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressCamera={() => showCamera()}
          onPressGallery={() => showGallery()}
        />
        <View style={styles.ButtonContainer}>
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
            bgColor={!frontImage || !backImage ? colors.g1 : colors.b1}
            disabled={frontImage && backImage ? false : true}
            onPress={() => {
              handleNavigation();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UploadImage;
