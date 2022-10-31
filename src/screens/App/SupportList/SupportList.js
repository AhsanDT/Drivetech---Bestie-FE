import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {AppButton, AppLoader, Header, SupportCard} from '../../../components';
import {
  checkConnected,
  colors,
  networkText,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';
import {
  createConversationRequest,
  getAllSupportTicket,
} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import moment from 'moment';

const SupportList = ({navigation}) => {
  const [list, setList] = useState([]);
  const [loading, setloading] = useState(false);
  const isFocus = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocus) {
      getAllSupportTickets();
    }
  }, [isFocus]);

  const renderItem = ({item, index}) => (
    <SupportCard
      ticketnumber={item?.support?.ticket_number}
      status={item?.support?.status}
      date={moment(item?.created_at).format('MM/DD/YYYY')}
      description={item?.support?.description}
      onPress={() => {
        onPressTicket(item);
      }}
      source={item?.support_image ? {uri: item?.support_image} : false}
    />
  );

  const getAllSupportTickets = async value => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      try {
        const cbSuccess = response => {
          setloading(false);
          setList(response?.data);
          console.log(list);
        };
        const cbFailure = err => {
          Alert.alert('' || 'Error', err || 'Something went wrong');
          setloading(false);
          console.log('ERROR', err);
        };
        dispatch(getAllSupportTicket(cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  const onPressTicket = async item => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      try {
        const data = new FormData();
        data.append('support_id', item?.support?.id);
        const cbSuccess = response => {
          // console.log('create Conversation Success', response);
          setloading(false);
          navigation.navigate('Chat', {
            id: response?.data,
          });
          console.log(' conversation res', response?.data);
        };
        const cbFailure = err => {
          Alert.alert('' || 'Error', err || 'Something went wrong');
          setloading(false);
          console.log('ERROR', err);
        };
        dispatch(createConversationRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Support'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        {list?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={list}
            renderItem={renderItem}
          />
        ) : (
          <View style={styles.noRecordsView}>
            <Text style={styles.noRecords}>{'No ticket found'}</Text>
          </View>
        )}
        <AppButton
          bgColor={colors.b1}
          width={WP('85')}
          title={'Send New Message'}
          onPress={() => {
            navigation.navigate('Message');
          }}
        />
      </View>

      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SupportList;
