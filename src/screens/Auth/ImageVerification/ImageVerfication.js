import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {AppButton, AppHeader, ImagePickerModal} from '../../../components';
import {appIcons, colors, image_options, WP} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
const ImageVerification = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [hasPermission, setHasPermission] = useState(false);

  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices;

  const renderCamera =  () => {
    console.log('DEVICES==> ', device);
    if (device == null || undefined) {
      return <ActivityIndicator size={20} color={'red'} />;
    }

    return (
      <View style={{
        flex: 1
      }} >
      {/* <Camera
        // ref={camera}
        style={{flex: 1}}
        device={device}
        isActive={true}
        // photo={true}
        frameProcessorFps={'auto'}
        // frameProcessor={frameProcessor}
      /> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderCamera()}
      {/* <AppHeader title={'Selfie\nVerification'} backIcon={true} />
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

      <View style={styles.contentContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setShow(true);
          }}>
          <Image
            source={image === '' ? appIcons.scan : {uri: image}}
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
      </View> */}
    </SafeAreaView>
  );
};
export default ImageVerification;
