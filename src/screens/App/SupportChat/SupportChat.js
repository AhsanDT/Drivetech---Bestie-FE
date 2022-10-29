import React, {useState} from 'react';
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
  ChatCard,
  ChatInput,
  Header,
  ImagePickerModal,
} from '../../../components';
import {appIcons, HP, image_options} from '../../../shared/exporter';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const SupportChat = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [fresh, setFresh] = useState(true);

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

  // const renderItem = () => (
  //   <ChatCard
  //     date={'06/15/2022'}
  //     time={' | 6:00 AM'}
  //     token={'KGNV83JNFG8'}
  //     message={
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium sem sit amet venenatis commodo. Nullam aliquam lacus nisl, varius luctus mauris hendrerit ut. Etiam eros lectus, commod.'
  //     }
  //   />
  // );

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.msgContainer}>
        {item?.id === allMessages ? (
          // Sender Bubble
          <View style={styles.senderBubble}>
            <View style={styles.senderBubbleStyles}>
              {image ? (
                <Image
                  source={image}
                  style={{
                    height: HP('15'),
                    width: HP('20'),
                    borderRadius: 10,
                    paddingBottom: 5,
                  }}
                />
              ) : null}
              <Text
                style={[
                  styles.senderMsgStyles,
                  {paddingTop: item?.image ? 10 : null},
                ]}>
                {message}
              </Text>
            </View>
          </View>
        ) : (
          // Receiver Bubble
          <View style={styles.receiverBubble}>
            <View style={{width: '70%'}}>
              <View style={styles.receiverBubbleStyles}>
                {image ? (
                  <Image
                    source={image}
                    style={{
                      height: HP('15'),
                      width: HP('20'),
                      borderRadius: 10,
                      paddingBottom: 5,
                    }}
                  />
                ) : null}
                <Text
                  style={[
                    styles.receiverMsgStyles,
                    {paddingTop: item?.image ? 10 : null},
                  ]}>
                  {item.body}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
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
          inverted
          data={allMessages}
          extraData={fresh}
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
          proofIcon={image === '' ? appIcons.proof : image}
          attachIcon={appIcons.attach}
          onChangeText={text => setMessage(text)}
          value={message}
          onPressSend={() => {
            setMessage('');
            setAllMessages(message);
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
    </SafeAreaView>
  );
};

export default SupportChat;
