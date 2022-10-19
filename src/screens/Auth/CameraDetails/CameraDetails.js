import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  AppHeader,
  AppButton,
  AppInput,
  Camera,
  TalentList,
} from '../../../components';
import {
  Camera_List,
  colors,
  Equipment_List,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';

const CameraDetails = ({navigation}) => {
  const [fields, setFields] = useState([{value: null}]);

  const handleChange = (i, event) => {
    console.log(event);
    const values = [...fields];
    values[i].value = event;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    if (values) {
      values.push({value: null});
      setFields(values);
      console.log('value', values);
    } else {
      alert(`Add Input`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          title={`Add Your\nCamera Details`}
          // backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <View>
          <AppInput
            inputContainerStyle={styles.inputContainerStyle}
            placeholder={'Select talent'}
            placeholderTextColor={colors.g3}
            title={'Talent'}
            editable={false}
            rightIcon={
              <Icon
                name="arrow-right"
                type="MaterialIcons"
                size={25}
                color={colors.g4}
                onPress={() => {
                  navigation.navigate('ShowInterest');
                }}
              />
            }
          />
          <FlatList data={[1, 2, 3, 4]} renderItem={() => <TalentList />} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.cameraTextStyle}>Camera and Equipment</Text>
          <Text style={styles.modelTextStyle}>Model</Text>
          <AppInput
            placeholder={'Input specs'}
            placeholderTextColor={colors.g3}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.modelTextStyle}>Type of camera</Text>
          <FlatList
            data={Camera_List}
            renderItem={({item, index}) => (
              <Camera source={item.icon} title={item.title} />
            )}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.modelTextStyle}>Other Equipment</Text>
          <FlatList
            data={Equipment_List}
            renderItem={({item, index}) => <Camera title={item.title} />}
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
            title={'Back'}
            width={WP('35')}
            height={WP('13')}
            bgColor={colors.g8}
            textColor={colors.g9}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <AppButton
            title={'Next'}
            width={WP('35')}
            height={WP('13')}
            bgColor={colors.b1}
            // onPress={() => {
            //   onPressButton();
            // }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraDetails;
