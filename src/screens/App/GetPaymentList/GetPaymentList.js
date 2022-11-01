import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AddCard,
  AppLoader,
  DeleteModal,
  EditCard,
  Header,
} from '../../../components';
import {
  appIcons,
  checkConnected,
  networkText,
  WP,
} from '../../../shared/exporter';
import {deletePaymentCard, getPaymentCard} from '../../../redux/actions';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';

const GetPaymentList = ({navigation}) => {
  const tabRef = useRef(null);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      getAllCard();
    }
  }, [isFocus]);

  const renderItem = ({item, index}) => (
    <EditCard
      onPressDelete={() => {
        setData(item);
        tabRef.current.open(item);
        // handleDeleteButton(item);
        console.log(data);
      }}
      onPressEdit={() => {
        navigation.navigate('EditCard', {
          params: item,
        });
      }}
      source={item?.brand === 'Visa' ? appIcons?.visa : appIcons.master}
      month={item?.exp_month}
      year={item?.exp_year}
      number={item?.cvc}
    />
  );

  const getAllCard = async value => {
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
        dispatch(getPaymentCard(cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  const handleDeleteButton = async item => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      try {
        const cbSuccess = response => {
          console.log('response', response);
          setloading(false);
          setData(response.data);
          tabRef?.current?.close();
          getAllCard();
        };
        const cbFailure = err => {
          Alert.alert('' || 'Error', err || 'Something went wrong');
          setloading(false);
          console.log('ERROR', err);
        };
        dispatch(deletePaymentCard(data.id, cbSuccess, cbFailure));
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
        title={'Payment Method'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{marginBottom: WP('3')}}>
        <FlatList
          data={list}
          renderItem={renderItem}
          key={(item, index) => item?.index + toString()}
        />

        <AddCard
          onPressCard={() => {
            navigation.navigate('SelectPaymentMethod');
          }}
        />
        <DeleteModal
          tabRef={tabRef}
          onPressCancel={() => {
            tabRef?.current?.close();
          }}
          onPressDelete={item => {
            handleDeleteButton(item);
          }}
          month={data?.exp_month}
          year={String(data?.exp_year)?.slice(-2)}
          number={data?.cvc}
        />
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetPaymentList;
