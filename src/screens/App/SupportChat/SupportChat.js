import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  ChatCard,
  ChatInput,
  Header,
  ImagePickerModal,
} from '../../../components';
import {image_options} from '../../../shared/exporter';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const SupportChat = () => {
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

  const renderItem = () => (
    <ChatCard
      date={'06/15/2022'}
      time={' | 6:00 AM'}
      token={'KGNV83JNFG8'}
      message={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium sem sit amet venenatis commodo. Nullam aliquam lacus nisl, varius luctus mauris hendrerit ut. Etiam eros lectus, commod.'
      }
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Support'} backIcon={true} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        key={({item, index}) => {
          item.index + toString();
        }}
      />
      <ChatInput
        onPressProof={() => {
          setShow(true);
        }}
      />
      <ImagePickerModal
        show={show}
        onPressHide={() => setShow(false)}
        onPressCamera={() => showCamera()}
        onPressGallery={() => showGallery()}
        onPressCancel={() => setShow(false)}
      />
    </SafeAreaView>
  );
};

export default SupportChat;