import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AppButton, AppHeader} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import styles from './styles';
const ImageVerification = ({navigation}) => {
  const [showPhoto, setShowPhoto] = useState();
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);

  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;

  useEffect(() => {
    cameraPermission();
  }, []);

  const onPressButton = async () => {
    console.log(camera.current);
    console.log(123);
    const photo = await camera.current.takeSnapshot({
      quality: 85,
      skipMetadata: true,
    });
    setShowPhoto(photo?.path);
  };

  const onCameraInitialized = useCallback(() => {
    setIsCameraInitialized(true);
  }, []);
  const cameraPermission = async () => await Camera.requestCameraPermission();

  const renderCamera = () => {
    if (device == null) return <ActivityIndicator />;
    return (
      <Camera
        ref={camera}
        style={styles.CameraContainer}
        device={device}
        isActive={showPhoto ? false : true}
        photo={false}
        onTouchEndCapture={() => {
          onPressButton();
        }}
        onInitialized={onCameraInitialized}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader
            title={'Selfie\nVerification'}
            backIcon={true}
            onPressBack={() => {
              navigation.goBack();
            }}
          />
          {showPhoto ? (
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

          {!showPhoto ? (
            <View style={styles.renderCameraContainer}>{renderCamera()}</View>
          ) : (
            <TouchableOpacity>
              <Image
                source={{uri: `file://${showPhoto}`}}
                style={styles.ImageContainer}
              />
            </TouchableOpacity>
          )}
        </View>
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

          {showPhoto ? (
            <AppButton
              title={'Next'}
              width={WP('35')}
              height={WP('13')}
              bgColor={colors.b1}
              // onPress={() => {
              //   onPressButton();
              // }}
            />
          ) : (
            <AppButton
              title={'Capture'}
              width={WP('35')}
              height={WP('13')}
              bgColor={colors.b1}
              onPress={() => {
                onPressButton();
              }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ImageVerification;
