import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Platform,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import {
  AppLoader,
  ChatCard,
  ChatInput,
  Header,
  ImagePickerModal,
} from '../../../components';
import {
  appIcons,
  appImages,
  checkConnected,
  HP,
  image_options,
  networkText,
} from '../../../shared/exporter';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  createMessageRequest,
  getAllConversationMessage,
} from '../../../redux/actions';
import moment from 'moment';
import {stat} from 'fs';

const SupportChat = ({navigation, route}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setloading] = useState(false);
  const item = route?.params?.id;
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  const {userInfo} = useSelector(state => state.auth);

  useEffect(() => {
    if (isFocus) {
      getMesssgeList();
    }
  }, [isFocus]);

  //getMessageList
  const getMesssgeList = async () => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      try {
        const data = new FormData();
        data.append('message[support_conversation_id]', item?.id);
        const cbSuccess = res => {
          console.log('getres', res?.data);
          setloading(false);
          setAllMessages(res?.data);
        };
        const cbFailure = err => {
          setloading(false);
        };
        dispatch(getAllConversationMessage(data, cbSuccess, cbFailure));
      } catch (err) {
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  //Create Message
  const createMessage = async () => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      try {
        const data = new FormData();
        data.append('message[support_conversation_id]', item?.id);
        data.append('message[body]', text);
        if (image) {
          data.append('message[image]', {
            uri: image?.uri,
            name: image?.fileName,
            type: image?.type,
          });
        }

        const cbSuccess = res => {
          setloading(false);
          getMesssgeList();
          setText('');
          setImage('');
        };
        const cbFailure = err => {
          setloading(false);
        };
        dispatch(createMessageRequest(data, cbSuccess, cbFailure));
      } catch (err) {
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

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

  const renderItem = ({item, index}) => {
    return (
      <ChatCard
        token={item?.ticket_number}
        date={
          moment(item?.message?.created_at).format('MM/DD/YYYY') +
          ' | ' +
          moment(item?.message?.created_at).format('hh:mm A')
        }
        message={item?.message?.body}
        image={item.message_image ? {uri: item?.message_image} : null}
        userImage={{uri: userInfo?.profile_image}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Support'}
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />

      {allMessages?.length > 0 ? (
        <FlatList
          // inverted
          data={allMessages}
          // extraData={fresh}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>{'No message found'}</Text>
        </View>
      )}
      <KeyboardAvoidingView>
        <ChatInput
          onPressProof={() => {
            setShow(true);
          }}
          imgStyle={image ? styles?.uriStyle : styles.imgStyle}
          proofIcon={image === '' ? appIcons.proof : image}
          // attachIcon={image === '' ? appIcons.attach : null}
          onChangeText={text => setText(text)}
          value={text}
          disabled={text || image ? false : true}
          onPressSend={() => {
            createMessage();
          }}
        />

        {show && (
          <ImagePickerModal
            show={show}
            onPressHide={() => setShow(false)}
            onPressCamera={() => showCamera()}
            onPressGallery={() => showGallery()}
            onPressCancel={() => setShow(false)}
          />
        )}
      </KeyboardAvoidingView>
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SupportChat;
