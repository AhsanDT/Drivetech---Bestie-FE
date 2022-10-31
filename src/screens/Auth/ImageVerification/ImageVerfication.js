import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {AppButton, AppHeader, AppLoader} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useDispatch, useSelector} from 'react-redux';
import * as types from '../../../redux/actions/types/auth_types';
import styles from './styles';
import {
  signUpRequest,
  updateSocialLoginRequest,
  updateSignupObject,
} from '../../../redux/actions';

const ImageVerification = ({navigation}) => {
  const [showPhoto, setShowPhoto] = useState();
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const dispatch = useDispatch();
  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;
  const {signupObject} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    cameraPermission();
  }, []);

  const onPressButton = async () => {
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
  const handleNavigation = () => {
    if (signupObject?.profileType == 'bestie') {
      dispatch(
        updateSignupObject({
          selfie: {
            uri: `file://${showPhoto}`,
            name: showPhoto,
            type: 'image/jpeg',
          },
        }),
      );
      navigation.navigate('AddPortfolio');
    } else {
      handleButton();
    }
  };

  // signupObject.profileType
  const handleButton = () => {
    setloading(true);
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        country,
        city,
        phoneNumber,
        age,
        sex,
        pronoun,
        profilePhoto,
        interestList,
        idCardfront,
        idCardBack,
        login_type,
        selfie,
        profileType,
      } = signupObject;
      const data = new FormData();
      data.append('user[first_name]', firstName),
        data.append('user[email]', email?.toLowerCase()),
        data.append('user[last_name]', lastName);
      if (login_type == 'manual') {
        data.append('user[password]', password);
      }
      data.append('user[profile_type]', profileType);

      data.append('user[age]', age),
        data.append('user[phone_number]', phoneNumber),
        data.append('user[country]', country),
        data.append('user[city]', city),
        data.append('user[sex]', sex),
        data.append('user[selfie]', {
          uri: `file://${showPhoto}`,
          name: showPhoto,
          type: 'image/jpeg',
        }),
        data.append('user[id_front_image]', {
          uri: idCardfront?.uri,
          name: idCardfront?.fileName,
          type: idCardfront?.type,
        }),
        data.append('user[pronoun]', pronoun),
        data.append('user[id_back_image]', {
          uri: idCardBack?.uri,
          name: idCardBack?.fileName,
          type: idCardBack?.type,
        }),
        interestList.forEach(obj => {
          data.append('user[user_interests_attributes][]interest_id', obj.id);
        });

      data.append('user[profile_image]', {
        uri: profilePhoto?.uri,
        name: profilePhoto?.fileName,
        type: profilePhoto?.type,
      });
      const cbSuccess = res => {
        setloading(false);
        Alert.alert('Congrats', 'Signup Successfully');
        // navigation.replace('Login');
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      };
      const cbFailure = err => {
        console.log('Err..', err);
        Alert.alert('Error', err);
        setloading(false);
      };
      if (login_type == 'social login') {
        dispatch(updateSocialLoginRequest(data, email, cbSuccess, cbFailure));
      } else {
        dispatch(signUpRequest(data, cbSuccess, cbFailure));
      }
    } catch (error) {
      console.log('ERROR=> ', error);

      setloading(false);
    }
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
            // <TouchableOpacity>
            <Image
              source={{uri: `file://${showPhoto}`}}
              style={styles.ImageContainer}
            />
            // </TouchableOpacity>
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
              onPress={() => handleNavigation()}
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
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ImageVerification;
