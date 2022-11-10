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
import {ShowInterestButton, Header, AppButton} from '../../../components';
import styles from './styles';
import {getInterestList, updateSignupObject} from '../../../redux/actions';
import {appIcons, WP, HP, colors} from '../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from 'os';
let count = 0;
const ShowInterest = ({navigation}) => {
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  const [showLess, setshowLess] = useState(false);
  const {userInfo} = useSelector(state => state.auth);

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
            console.log('ok');
          }
        });

        setlist(response?.data);
      };
      const cbFailure = err => {};
      dispatch(getInterestList(cbSuccess, cbFailure));
    } catch (error) {}
  };

  const handleNext = () => {
    console.log('count', count);
    if (count < 1) {
      Alert.alert('Alert', 'Please select your interests.');
    } else {
    }
  };

  const handleNavigation = () => {
    if (list.filter(obj => obj.selected).length < 1) {
      Alert.alert('Alert', 'Please select your interests.');
    } else {
      // updateSignupObject({interestList: list.filter(obj => obj.selected)}),

      // console.log(
      //   'interest list==> ',
      //   list.filter(obj => obj.selected),
      // );
      console.log(
        list.forEach(element => {
          if (element.selected) {
            console.log('IDS==> ', element.id);
          }
        }),
      );

      // navigation.navigate('UploadImage');
    }
  };

  const footer = () => {
    return (
      <View style={{paddingBottom: 15}}>
        <TouchableOpacity onPress={() => setshowLess(!showLess)}>
          <View style={styles.showAllView}>
            <Text style={styles.showText}>
              {showLess ? 'Show less' : 'Show all'}
            </Text>
            <Image
              source={appIcons.arrow}
              style={[
                styles.arrow,
                {transform: [{rotate: showLess ? '180 deg' : '0 deg'}]},
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
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
          // ListFooterComponent={() => footer()}
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
            onPress={() => handleNavigation()}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default ShowInterest;
