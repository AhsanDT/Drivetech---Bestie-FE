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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  Header,
  ImagePickerModal,
} from '../../../components';
import {appIcons, colors, family, size, WP} from '../../../shared/exporter';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {image_options} from '../../../shared/exporter';

const SupportMessage = () => {
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
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
    setShow(false);
    try {
      launchCamera(image_options, response => {
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
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 0.78}}>
        <Header title={'Message'} backIcon={true} />
        <AppInput
          multiline={true}
          inputContainerStyle={styles.inputContainerStyle}
          title={'Your Message'}
          placeholder={'Type here'}
          placeholderTextColor={colors.g3}
          inputStyle={styles.inputStyle}
        />

        {image ? (
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}
            style={{}}>
            <Image
              source={image}
              style={styles.imageStyle}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => {
                setShow(true);
              }}>
              <Image
                source={appIcons.proof}
                style={styles.proofIconStyle}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Text style={styles.proofTextStyle}>Attach Image or Proof</Text>
          </View>
        )}

        <ImagePickerModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressCamera={() => showCamera()}
          onPressGallery={() => showGallery()}
          onPressCancel={() => setShow(false)}
        />
        <AppButton
          title={'Send Message'}
          bgColor={colors.b1}
          width={WP('90')}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SupportMessage;
