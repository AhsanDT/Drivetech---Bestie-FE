import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {AppButton, AppHeader} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
const ImageVerification = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  const onCameraInitialized = useCallback(
    () => console.log('camera initialized'),
    [],
  );
  const isFocused = useIsFocused();
  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;
  // const photo = async () =>
  //   await camera.current.takePhoto({
  //     flash: 'on',
  //   });

  const snapshot = async () => await camera.current.takeSnapshot();

  const onPressButton = async () => {
    console.log(camera.current);
    console.log(123);
    const photo = await camera.current.takeSnapshot({
      quality: 85,
      skipMetadata: true,
    });

    console.log('photo', photo);
  };

  // const photo = async () =>
  //   await camera.current.takeSnapshot({
  //     quality: 85,
  //     skipMetadata: true,
  //   });

  const cameraPermission = async () => await Camera.requestCameraPermission();

  useEffect(() => {
    cameraPermission();
  }, []);

  const renderCamera = () => {
    if (device == null) return <ActivityIndicator />;
    return (
      <Camera
        ref={camera}
        style={{
          height: WP('20'),
          width: WP('20'),
          borderRadius: WP('40'),
        }}
        device={device}
        isActive={isFocused}
        photo={true}
        // preset={'photo'}
        // fps={240}
        // onTouchEndCapture={'true'}
        onTouchEndCapture={snapshot()}
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
            onPressButton();
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
