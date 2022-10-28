import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, CreditCard, Header} from '../../../components';
import {getPaymentCard} from '../../../redux/actions';
import {Card_List, colors, WP} from '../../../shared/exporter';
import {styles} from './styles';

const SelectPaymentMethod = ({navigation}) => {
  const [show, setShow] = useState(null);
  console.log('show', show);

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
      {show == 0 ? (
        <AppButton
          title={'Next'}
          bgColor={colors.b1}
          width={WP('85')}
          // disabled={show === null ? true : false}
          onPress={() => {
            navigation.navigate('AddCard');
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default SelectPaymentMethod;
