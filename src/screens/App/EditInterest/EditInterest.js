import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  ShowInterestButton,
  Header,
  AppButton,
  AppLoader,
} from '../../../components';
import styles from './styles';
import {
  getInterestList,
  updateProfileAction,
  updateUserInterestAction,
} from '../../../redux/actions';
import {appIcons, WP, HP, colors} from '../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from 'os';
let count = 0;
const EditShowInterest = ({navigation}) => {
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  const [showLess, setshowLess] = useState(false);
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getInterests();
  }, []);

  const itemPressed = (item, index) => {
    if (list[index].selected) {
      list[index].selected = false;
    } else {
      list[index].selected = true;
    }
    setlist([...list]);
    count = list.filter(obj => obj.selected).length;
  };
  const getInterests = () => {
    try {
      const cbSuccess = response => {
        response?.data.forEach(element => {
          element.selected = false;
        });

        response?.data?.forEach(element => {
          if (
            userInfo?.interest?.find(item => item?.title === element?.title)
          ) {
            element.selected = true;
          }
        });

        setlist(response?.data);
      };
      const cbFailure = err => {};
      dispatch(getInterestList(cbSuccess, cbFailure));
    } catch (error) {}
  };

  const onPressUpdate = () => {
    if (list.filter(obj => obj.selected).length < 1) {
      Alert.alert('Alert', 'Please select your interests.');
    } else {
      setloading(true);
      try {
        const data = new FormData();
        list.forEach(element => {
          if (element.selected) {
            data.append('interest_ids[]', element.id);
          }
        });
        const cbSuccess = res => {
          Alert.alert('Alert', 'Interest Updated Successfully.');
          setloading(false);
          navigation.goBack();
        };
        const cbFailure = err => {
          setloading(false);
          Alert.alert('Error', 'Something went wrong.');
        };
        dispatch(updateUserInterestAction(data, cbSuccess, cbFailure));
      } catch (error) {
        setloading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={'#fff'} translucent={false} />
      <Header
        title={'Interest'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />

      {list?.length > 0 ? (
        <FlatList
          data={list}
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{
            flexWrap: 'wrap',
          }}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
          key={(item, index) => item + index.toString()}
          renderItem={({item, index}) => (
            <ShowInterestButton
              item={item}
              onPress={() => itemPressed(item, index)}
            />
          )}
        />
      ) : (
        <ActivityIndicator color={'#000'} />
      )}
      {list?.length > 0 ? (
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            width: WP('90'),
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <AppButton
            width={WP('30')}
            bgColor={colors.b1}
            title={'Update'}
            height={WP('14')}
            onPress={() => onPressUpdate()}
          />
        </View>
      ) : null}
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default EditShowInterest;
