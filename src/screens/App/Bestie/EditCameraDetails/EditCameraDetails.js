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
  updateProfileAction,
  updateUserTalentAction,
} from '../../../../redux/actions';
import {useFocusEffect} from '@react-navigation/native';
import * as TYPES from '../../../../redux/actions/types/auth_types';

var count = 0;
const CameraDetails = ({navigation}) => {
  const [list, setlist] = useState(Camera_List);
  const [otherequipmentList, setotherequipmentList] = useState(Equipment_List);
  const dispatch = useDispatch();
  const {signupObject, userInfo} = useSelector(state => state.auth);
  const [talentArr, settalentArr] = useState(userInfo?.talent);
  const [check, setcheck] = useState(false);
  const [cameraModel, setcameraModel] = useState(
    userInfo?.camera_detail?.model,
  );
  const [fields, setFields] = useState([]);
  const [cameraType, setCameraType] = useState(
    userInfo?.camera_detail?.camera_type,
  );
  const [loading, setloading] = useState(false);
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
  useEffect(() => {
    settalentArr(userInfo?.talent);
  }, []);

  const handleAdd = () => {
    setFields([...fields, {value: ''}]);
  };

  useEffect(() => {
    let otherInputs = userInfo?.camera_detail?.others;
    setFields(
      otherInputs?.map(item => {
        return {value: item};
      }),
    );
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

  useEffect(() => {
    let equipment = userInfo?.camera_detail?.equipment;
    let arr = otherequipmentList?.map(mainItem => {
      let isSame = equipment?.find(subItem => subItem === mainItem?.title);
      if (isSame) {
        return {
          ...mainItem,
          selected: true,
        };
      } else {
        return mainItem;
      }
    });
    setotherequipmentList(arr);
  }, []);

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
    if (talentArr?.length < 1) {
      alert('Please select atleast one talent');
      return;
    }
    try {
      setloading(true);
      const talent = new FormData();
      talentArr?.forEach(element => {
        if (element.selected) {
          talent.append('talent_ids[]', element.id);
        }
      });

      const cbSuccess = res => {
        handleCameraDetail();
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateUserTalentAction(talent, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
    }
  };

  const handleCameraDetail = () => {
    try {
      setloading(true);
      const data = new FormData();

      data.append('profile[camera_detail_attributes]model', cameraModel);
      fields?.forEach(obj => {
        if (obj.value) {
          data.append('profile[camera_detail_attributes]others[]', obj?.value);
        }
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
        setloading(false);
        Alert.alert('Alert', 'Camera details updated successfully');
        navigation.navigate('EditProfileMenu');
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateProfileAction(data, cbSuccess, cbFailure));
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
        <Header
          title={'Camera Details'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditTalents', {data: talentArr});
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
            extraData={otherequipmentList}
            data={otherequipmentList}
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
          {fields?.map((field, index) => {
            return (
              <View key={`${field}-${index}`}>
                <AppInput
                  value={field?.value}
                  placeholderTextColor={colors.g3}
                  onChangeText={txt => {
                    const newArray = [...fields];
                    newArray[index].value = txt;
                    setFields(newArray);
                  }}
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
        </View>
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraDetails;
