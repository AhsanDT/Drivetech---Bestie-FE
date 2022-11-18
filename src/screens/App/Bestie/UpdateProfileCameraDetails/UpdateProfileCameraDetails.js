import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  AppHeader,
  AppButton,
  AppInput,
  Camera,
  TalentList,
  Header,
  AppLoader,
} from '../../../../components';
import {
  Camera_List,
  colors,
  Equipment_List,
  WP,
} from '../../../../shared/exporter';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateSignupObject,
  updateProfileAction,
  updateUserTalentAction,
} from '../../../../redux/actions';
import {useFocusEffect} from '@react-navigation/native';

var count = 0;
const CameraDetails = ({navigation}) => {
  const [fields, setFields] = useState([{value: ''}]);
  const [list, setlist] = useState(Camera_List);
  const [otherequipmentList, setotherequipmentList] = useState(Equipment_List);
  const [cameraModel, setcameraModel] = useState('');
  const dispatch = useDispatch();
  const {signupObject, userInfo} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  const [talentArr, settalentArr] = useState();
  const [check, setcheck] = useState(false);
  const [cameraType, setCameraType] = useState(
    userInfo?.camera_detail?.camera_type,
  );

  useFocusEffect(
    React.useCallback(() => {
      const updateValue = () => {
        const userTelents =
          signupObject?.talentList ||
          JSON.parse(JSON.stringify(userInfo?.talent));
        settalentArr(userTelents);
      };
      const unsubscribe = updateValue();
      return () => unsubscribe;
    }, [signupObject]),
  );
  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    if (values) {
      values.push({value: ''});
      setFields(values);
    } else {
      // alert(`Add Input`);
    }
  };

  useEffect(() => {
    function findIndex(item) {
      return item.title === cameraType;
    }
    list.forEach(element => {
      element.selected = false;
    });
    let index = list.findIndex(findIndex);
    if (index != -1) list[index].selected = true;
    setlist([...list]);
  }, [cameraType]);

  const handleOtherEquipment = (item, index) => {
    otherequipmentList[index].selected = !otherequipmentList[index].selected;
    otherequipmentList?.map(i => {
      if (i?.id === item?.id) {
        return {
          selected: !item.selected,
        };
      }
      return item;
    });
    setotherequipmentList([...otherequipmentList]);
  };

  const onPressDelete = index => {
    talentArr.splice(index, 1);
    settalentArr([...talentArr]);
  };

  const handleSubmit = () => {
    try {
      setloading(true);
      const talent = new FormData();
      const data = new FormData();

      talentArr?.forEach(element => {
        if (element.selected) {
          talent.append('talent_ids[]', element.id);
        }
      });

      data.append('profile[camera_detail_attributes]model', cameraModel);

      fields?.forEach(obj => {
        data.append('profile[camera_detail_attributes]others[]', obj?.value);
      });

      otherequipmentList?.forEach(element => {
        if (element.selected) {
          data.append(
            'profile[camera_detail_attributes]equipment[]',
            element.title,
          );
        }
      });

      list.forEach(element => {
        if (element.selected) {
          data.append(
            'profile[camera_detail_attributes]camera_type',
            element.title,
          );
        }
      });

      const cbSuccess = res => {
        console.log('res');
        setloading(false);
        navigation.navigate('Bestietack', {
          screen: 'UpdateProfileSocialMediaLinks',
        });
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      console.log('talent', talent);
      dispatch(updateProfileAction(data, cbSuccess, cbFailure));
      dispatch(updateUserTalentAction(talent, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader title={'Add Your\nCamera Details '} />

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateProfileTalents', {data: talentArr});
            }}>
            <AppInput
              inputContainerStyle={styles.inputContainerStyle}
              placeholder={'Select talent'}
              placeholderTextColor={colors.g3}
              title={'Talents'}
              editable={false}
              rightIcon={
                <Icon
                  name="arrow-right"
                  type="MaterialIcons"
                  size={25}
                  color={colors.g4}
                  onPress={() => {
                    navigation.navigate('ShowTalent');
                  }}
                />
              }
            />
          </TouchableOpacity>
          <FlatList
            data={talentArr}
            renderItem={({item, index}) => (
              <TalentList item={item} onPress={() => onPressDelete(index)} />
            )}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.cameraTextStyle}>Camera and Equipment</Text>
          <Text style={styles.modelTextStyle}>Model</Text>
          <AppInput
            placeholder={'Input specs'}
            placeholderTextColor={colors.g3}
            value={cameraModel}
            onChangeText={text => setcameraModel(text)}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.modelTextStyle}>Type of camera</Text>
          <FlatList
            data={list || []}
            renderItem={({item, index}) => (
              <Camera
                source={item.icon}
                onPress={() => setCameraType(item.title)}
                item={item}
              />
            )}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.modelTextStyle}>Other Equipment</Text>
          <FlatList
            data={otherequipmentList || []}
            renderItem={({item, index}) => (
              <Camera
                onPress={() => handleOtherEquipment(item, index)}
                item={item}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Others</Text>
          {fields.map((field, id) => {
            return (
              <View key={`${field}-${id}`}>
                <AppInput
                  placeholder={'Input here'}
                  placeholderTextColor={colors.g3}
                  value={field.value}
                  onChangeText={txt => handleChange(id, txt)}
                />
              </View>
            );
          })}
          <Text
            style={styles.addTextStyle}
            onPress={() => {
              handleAdd();
            }}>
            Add more
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={'Update'}
            width={WP('35')}
            height={WP('13')}
            bgColor={colors.b1}
            onPress={() => {
              handleSubmit();
            }}
            // disabled={check? false :true}
          />
          <AppLoader loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraDetails;
