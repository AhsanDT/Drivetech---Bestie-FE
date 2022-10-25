import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, CreditCard, Header} from '../../../components';
import {Card_List, colors, WP} from '../../../shared/exporter';
import {styles} from './styles';

const AddCard = ({navigation}) => {
  const [show, setShow] = useState(null);
  const renderItem = ({item, index}) => (
    <CreditCard
      show={index === show ? true : false}
      title={item.title}
      subTitle={item.subTitle}
      onPress={() => {
        setShow(index);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Add Card'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAwareScrollView style={styles.keyboardContainer}>
        <Text style={styles.textStyle}>Card Info</Text>
        <FlatList
          data={Card_List}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </KeyboardAwareScrollView>

      <AppButton
        title={'Next'}
        bgColor={colors.b1}
        width={WP('85')}
        onPress={() => {
          navigation.navigate('CardDetails');
        }}
      />
    </SafeAreaView>
  );
};

export default AddCard;
