import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import styles from './styles';
const ImageVerification = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  const onCameraInitialized = useCallback(
    () => console.log('camera initialized'),
    [],
  );

  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const photo = async () =>
    await camera.current.takePhoto({
      flash: 'on',
    });

  const cameraPermission = async () => await Camera.getCameraPermissionStatus();

  useEffect(() => {
    return () => {
      cameraPermission;
    };
  }, []);

  const renderCamera = () => {
    if (device == null) return <ActivityIndicator />;
    return (
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={photo}
        preset={'photo'}
        // fps={240}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={'Selfie\nVerification'} backIcon={true} />
      {image ? (
        <View style={styles.headerTextContainer}>
          <Text style={styles.faceTextStyle}>Scan your face{'\n'}</Text>
          <Text style={styles.pictureTextStyle}>Please blink</Text>
        </View>
      ) : (
        <View style={styles.headerTextContainer}>
          <Text style={styles.faceTextStyle}>
            Prepare to scan your face{'\n'}
          </Text>
          <Text style={styles.pictureTextStyle}>
            Make sure you are in a well-lit room and hold the{'\n'}phone as
            shwon in the picture
          </Text>
        </View>
      )}

      <View style={styles.contentContainer}>{renderCamera()}</View>
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
          bgColor={!image ? colors.g4 : colors.b1}
          disabled={image ? false : true}
          //   onPress={() => {
          //     handleButtonPressed();
          //   }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ImageVerification;
