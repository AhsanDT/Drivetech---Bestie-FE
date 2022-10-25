import React, {useRef} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {AddCard, DeleteModal, EditCard, Header} from '../../../components';
import {styles} from './styles';

const PaymentMethod = ({navigation}) => {
  const tabRef = useRef(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Payment Method'} backIcon={true} />

      <EditCard
        onPressDelete={() => {
          tabRef.current.open();
        }}
        onPressEdit={() => {
          navigation.navigate('EditCard');
        }}
      />

      <AddCard
        onPressCard={() => {
          navigation.navigate('AddCard');
        }}
      />
      <DeleteModal
        tabRef={tabRef}
        onPressCancel={() => {
          tabRef?.current?.close();
        }}
        onPressDelete={() => {}}
      />
    </SafeAreaView>
  );
};

export default PaymentMethod;
