import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  AppLoader,
  Header,
  ImagePickerModal,
} from '../../../components';
import {
  appIcons,
  checkConnected,
  colors,
  family,
  networkText,
  size,
  support_MessageFormField,
  support_MessageVS,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {image_options} from '../../../shared/exporter';
import {addSupportTicketRequest} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';

const SupportMessage = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setloading] = useState(false);
  const ref = useRef();
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

  const onPressSaveCard = async values => {
    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        const data = new FormData();
        data.append('support[description]', message);
        data.append('support[image]', {
          uri: image?.uri,
          name: image?.fileName,
          type: image?.type,
        });

        const onSuccess = res => {
          setloading(false);
          setMessage('');
          setImage('');
          console.log('On Add Card Success', res);
          navigation.goBack();
        };
        const onFailure = error => {
          setloading(false);
          Alert.alert('Failed', 'Something went wrong!' || error);
        };
        dispatch(addSupportTicketRequest(data, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Message'}
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow:0.8}} >
        <AppInput
          multiline={true}
          inputContainerStyle={styles.inputContainerStyle}
          title={'Your Message'}
          placeholder={'Type here'}
          placeholderTextColor={colors.g3}
          inputStyle={styles.inputStyle}
          value={message}
          onChangeText={text => setMessage(text)}
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
          </View>
        )}
        <Text style={styles.proofTextStyle}>Attach Image or Proof</Text>

        <ImagePickerModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressCamera={() => showCamera()}
          onPressGallery={() => showGallery()}
          onPressCancel={() => setShow(false)}
        />
        <AppButton
          title={'Send Message'}
          bgColor={message && image ? colors.b1 : colors?.g20}
          width={WP('90')}
          height={WP('14')}
          onPress={() => {
            onPressSaveCard();
          }}
          disabled={message && image ? false : true}
        />
      </KeyboardAwareScrollView>

      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};
export default SupportMessage;
