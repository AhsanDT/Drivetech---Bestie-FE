import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  Header,
  SettingCard,
  ImagePickerModal,
  AppLoader,
} from '../../../components';
import {appIcons, appImages, image_options} from '../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {updateProfileAction} from '../../../redux/actions';
const Setting = ({navigation}) => {
  const {userType, userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);

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
            onSelectImage(response.assets[0]);
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
            onSelectImage(response.assets[0]);
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

  const onSelectImage = image => {
    setloading(true);
    try {
      const data = new FormData();

      data.append('profile[profile_image]', {
        uri: image?.uri,
        name: image?.fileName,
        type: image?.type,
      });

      const cbSuccess = res => {
        setloading(false);
        // navigation.goBack();
        alert('Profile Image Updated Successfully.');
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateProfileAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Edit Profile'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAwareScrollView>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={styles.profilePhotoView}>
            <ImageBackground
              style={styles.profilePhoto}
              imageStyle={styles.backgroundImage}
              source={image ? image : {uri: userInfo?.profile_image}}>
              <View style={styles.overlayImage}>
                <Image
                  source={appIcons.editPhoto}
                  style={{height: 30, width: 30}}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <SettingCard
          title={'Personal Information'}
          onPress={() => navigation.navigate('EditPersonalInformation')}
        />
        {userType == 'bestie' && (
          <View>
            <SettingCard
              title={'Portfolio'}
              onPress={() => navigation.navigate('EditPortfolio')}
            />
            <SettingCard
              title={'Camera Details'}
              onPress={() => navigation.push('EditCameraDetails')}
            />

            <SettingCard
              title={'Rate'}
              onPress={() => navigation.navigate('EditAccountRate')}
            />
          </View>
        )}
        <ImagePickerModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressCamera={() => showCamera()}
          onPressGallery={() => showGallery()}
          onPressCancel={() => setShow(false)}
        />
        <SettingCard
          title={'Interest'}
          onPress={() => navigation.navigate('EditInterest')}
        />
        <SettingCard
          title={'Change Password'}
          onPress={() => navigation.navigate('EditPasswordEmailConfirmation')}
        />
        {userType == 'bestie' && (
          <SettingCard
            title={'Add Social Media Links'}
            onPress={() => navigation.navigate('EditSocialMediaLink')}
          />
        )}
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Setting;
