import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ShowInterestButton, AppHeader, AppButton} from '../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getInterestList} from '../../../redux/actions';
import {appIcons, WP, HP, colors} from '../../../shared/exporter';
let count = 0;
const ShowInterest = navigation => {
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  const [showLess, setshowLess] = useState(false);
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

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: WP('90'),
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <AppButton
            width={WP('30')}
            bgColor={colors.g8}
            title={'Back'}
            height={WP('14')}
            onPress={() => navigation.goBack()}
            textColor={colors.g9}
          />
          <AppButton
            width={WP('30')}
            bgColor={colors.b1}
            title={'Next'}
            height={WP('14')}
            onPress={() => handleNext()}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={'#fff'} translucent={false} />
      <AppHeader
        title={`Select Your ${'\n'}Interests`}
        // backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>
        Don't be shy, the more you add the better the algorithm will match you
        with your ideal bestie
      </Text>
      <FlatList
        data={showLess ? list : list.slice(0, 6)}
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
      {/* <TouchableOpacity onPress={() => setshowLess(!showLess)}>
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
      </TouchableOpacity> */}
      {/* <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: WP('90'),
          alignSelf: 'center',
        }}>
        <AppButton
          width={WP('30')}
          bgColor={colors.g8}
          title={'Back'}
          height={WP('14')}
          onPress={() => navigation.goBack()}
          textColor={colors.g9}
        />
        <AppButton
          width={WP('30')}
          bgColor={colors.b1}
          title={'Next'}
          height={WP('14')}
          onPress={() => handleNext()}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default ShowInterest;
