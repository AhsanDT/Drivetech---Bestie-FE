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
  AppHeader,
  AppButton,
  Header,
} from '../../../../components';
import styles from './styles';
import {getTalentList, updateSignupObject} from '../../../../redux/actions';
import {appIcons, WP, HP, colors} from '../../../../screens/../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
let count = 0;
const showTalent = ({navigation, route}) => {
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  const [showLess, setshowLess] = useState(false);
  const {signupObject, userInfo} = useSelector(state => state.auth);
  const [data, setdata] = useState(route?.params?.data);

  useEffect(() => {
    getTalent();
  }, []);

  const itemPressed = (item, index) => {
    if (list[index].selected) {
      list[index].selected = false;
    } else {
      list[index].selected = true;
    }
    setlist([...list]);
    count = list?.filter(obj => obj.selected).length;
  };

  const getTalent = () => {
    try {
      const cbSuccess = response => {
        response?.data.forEach(element => {
          element.selected = false;
        });
        response?.data?.forEach(element => {
          if (data.find(item => item?.title == element?.title)) {
            element.selected = true;
            count = count + 1;
          }
        });
        setlist(response?.data);
      };
      const cbFailure = err => {};
      dispatch(getTalentList(cbSuccess, cbFailure));
    } catch (error) {}
  };

  const handleNext = () => {
    if (count < 1) {
      Alert.alert('Alert', 'Please select your interests.');
    } else {
    }
  };

  const handleNavigation = () => {
    if (count < 1) {
      Alert.alert('Alert', 'Please select your interests.');
    } else {
      dispatch(
        updateSignupObject({talentList: list.filter(obj => obj.selected)}),
      );

      navigation.goBack();
    }
  };

  const footer = () => {
    return <View style={{paddingBottom: 15}}></View>;
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={'#fff'} translucent={false} />
      <Header
        title={'Update Your Talents'}
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
          ListFooterComponent={() => footer()}
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
        <ActivityIndicator color={colors.b1} />
      )}
      <View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            width: WP('90'),
            alignSelf: 'center',
            marginTop: 5,
          }}>
          {list?.length > 0 && (
            <AppButton
              width={WP('30')}
              bgColor={colors.b1}
              title={'Next'}
              height={WP('14')}
              onPress={() => handleNavigation()}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default showTalent;
