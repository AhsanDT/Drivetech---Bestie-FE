import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  DiscardModal,
  Header,
  PaymentInput,
} from '../../../components';
import {colors, scrWidth, WP} from '../../../shared/exporter';
import {styles} from './styles';

const EditCard = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView style={{flexGrow: 0.9}}>
        <Header
          title={'Edit Card'}
          backIcon={true}
          onPressBack={() => {
            setShow(true);
          }}
        />
        <DiscardModal
          show={show}
          onPressHide={() => setShow(false)}
          onPressDiscard={() => {
            navigation.goBack();
          }}
          onPressCancel={() => {
            setShow(false);
          }}
          onPressUpdate={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textStyle}>Card Info</Text>

        <AppInput
          title={'Full Name'}
          placeholder={'Type here'}
          placeholderTextColor={colors.g3}
        />
        <AppInput
          title={'Country'}
          placeholder={'Type here'}
          placeholderTextColor={colors.g3}
        />
        <PaymentInput
          title={'Card Number'}
          onCardChange={() => {}}
          onFocus={() => {}}
        />
      </KeyboardAwareScrollView>
      <AppButton
        width={WP('85')}
        title={'Update Card'}
        bgColor={colors.b1}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default EditCard;
