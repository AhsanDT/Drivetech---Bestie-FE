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
} from '../../../../components';
import {
  Camera_List,
  colors,
  Equipment_List,
  WP,
} from '../../../../shared/exporter';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateSignupObject} from '../../../../redux/actions';
import {useFocusEffect} from '@react-navigation/native';
import * as TYPES from '../../../../redux/actions/types/auth_types';

var count = 0;
const CameraDetails = ({navigation}) => {
  const [fields, setFields] = useState([{value: ''}]);
  const [list, setlist] = useState(Camera_List);
  const [otherequipmentList, setotherequipmentList] = useState(Equipment_List);
  const [cameraModel, setcameraModel] = useState('');
  const dispatch = useDispatch();
  const {signupObject, userInfo} = useSelector(state => state.auth);

  const [data, setData] = useState();
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
        setData(userTelents);
      };
      const unsubscribe = updateValue();
      return () => unsubscribe;
    }, [signupObject]),
  );
  console.log('USERINFO+++> ', userInfo?.talent);
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
      console.log('value', values);
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

  const handleNextButton = () => {
    dispatch({
      type: TYPES.UPDATE_SIGNUP_OBJECT,
      payload: {
        cameraType: list.filter(obj => obj.selected),
        otherEquipments: otherequipmentList.filter(obj => obj.selected),
        otherInputEquipment: fields.filter(obj => obj.value),
        model: cameraModel,
      },
    });

    // dispatch(updateSignupObject({talentList: }));
  };

  const onPressDelete = index => {
    data.splice(index, 1);
    setData([...data]);
    // dispatch(updateSignupObject({talentList: data}));
  };

  console.log(signupObject.talentList);

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
              navigation.navigate('EditTalents');
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
          {console.log('DATA==> ', data)}
          <FlatList
            data={data}
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
              handleNextButton();
            }}
            // disabled={check? false :true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraDetails;
