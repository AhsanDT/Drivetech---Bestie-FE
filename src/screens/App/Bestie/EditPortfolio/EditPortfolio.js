import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
  PermissionsAndroid,
  StatusBar,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  ImagePickerModal,
  Header,
} from '../../../../components';
import {appIcons, colors, image_options, WP} from '../../../../shared/exporter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {updateSignupObject} from '../../../../redux/actions';
let count = 0;
const AddPortfolio = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [currentItemClicked, setCurrentItemClicked] = useState(null);
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.auth);
  // console.log('userInfo', userInfo);
  const [picsArray, setPicsArray] = useState(
    // {
    //   id: 1,
    //   image: null,
    //   loading: false,
    // },
    // {
    //   id: 2,
    //   image: null,
    //   loading: false,
    // },
    // {
    //   id: 3,
    //   image: null,
    //   loading: false,
    // },
    // {
    //   id: 4,
    //   image: null,
    //   loading: false,
    // },
    // {
    //   id: 5,
    //   image: null,
    //   loading: false,
    // },
    // {
    //   id: 6,
    //   image: null,
    //   loading: false,
    // },
    userInfo?.portfolio,
  );

  useEffect(() => {}, []);

  const showGallery = () => {
    setShow(false);
    try {
      launchImageLibrary(image_options, response => {
        if (Platform.OS === 'android') {
          requestCameraPermission();
        }
        if (response.didCancel) {
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.errorCode) {
          console.log('User tapped custom button: ', response.errorCode);
        } else {
          console.log('Response---', response.assets[0]);
          if (response.assets) {
            // setImage(response.assets[0]);
            updatePictureArray(response.assets[0]);
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
          console.log('');
          if (response.assets) {
            // setImage(response.assets[0]);
            updatePictureArray(response.assets[0]);
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

  const onAddImage = item => {
    setCurrentItemClicked(item);
    setShow(true);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.uploadImageContainer}
        activeOpacity={0.7}
        onPress={() => {
          onAddImage(item);
        }}>
        <Image
          source={item.image == null ? {uri: item?.portfolio_url} : item?.image}
          style={
            item.image == null
              ? styles.uriImageContainer
              : styles.uriImageContainer
          }
        />
      </TouchableOpacity>
    );
  };
  const updatePictureArray = picture => {
    setPicsArray(
      picsArray?.map(item => {
        if (item === currentItemClicked) {
          return {
            ...item,
            // loading: true,
            image: picture,
          };
        }
        return item;
      }),
    );
  };
  const handleButton = () => {
    // dispatch(updateSignupObject({portfolio: picsArray}));
    picsArray?.forEach(element => {
      console.log(
        'ELEMENT===> ',
        element?.image
          ? {
              uri: element?.image.uri,
              name: element?.image.fileName,
              type: element?.image.type,
            }
          : element?.portfolio_url,
      );
    });
    // navigation.navigate('CameraDetails');
  };

  count = picsArray?.filter(obj => obj?.image).length;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Edit Portfolio'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />

      <Text style={styles.textStyle}>Add Portfolio</Text>
      <View style={styles.contentContainer}>
        <FlatList
          data={picsArray || []}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
      <ImagePickerModal
        show={show}
        onPressHide={() => setShow(false)}
        onPressCamera={() => showCamera()}
        onPressGallery={() => showGallery()}
        onPressCancel={() => setShow(false)}
      />
      <View style={styles.ButtonContainer}>
        <AppButton
          title={'Update'}
          width={WP('35')}
          height={WP('13')}
          bgColor={colors.b1}
          // disabled={count < 6 ? true : false}
          onPress={() => {
            // navigation.navigate('ImageVerification');
            handleButton();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPortfolio;
