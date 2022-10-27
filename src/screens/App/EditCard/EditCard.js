import {Formik} from 'formik';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {
  AppButton,
  AppInput,
  AppLoader,
  DiscardModal,
  Header,
  PaymentInput,
} from '../../../components';
import {updatePaymentCard} from '../../../redux/actions';
import {
  checkConnected,
  colors,
  networkText,
  payment_CardFormField,
  payment_CardVS,
  scrWidth,
  WP,
} from '../../../shared/exporter';
import {styles} from './styles';

const EditCard = ({navigation, route}) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(route?.params?.params);
  const [loading, setloading] = useState(false);

  const ref = useRef();

  const dispatch = useDispatch();

  const onPressUpdate = async values => {
    console.log('value', values);
    setloading(true);
    const check = await checkConnected();
    if (check) {
      const data = new FormData();
      data.append('card[card_holder_name]', values?.fullname);
      data.append('card[country]', values?.country);
      try {
        const cbSuccess = response => {
          setloading(false);
          navigation.goBack();
        };
        const cbFailure = err => {
          Alert.alert('' || 'Error', 'Something went wrong!');
          setloading(false);
          console.log('ERROR', err);
        };
        dispatch(updatePaymentCard(data, item?.id, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Edit Card'}
        backIcon={true}
        onPressBack={() => {
          setShow(true);
        }}
      />
      <Formik
        innerRef={ref}
        initialValues={payment_CardFormField}
        onSubmit={values => {
          onPressUpdate(values);
        }}
        validationSchema={payment_CardVS}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
          handleReset,
          setFieldValue,
        }) => {
          useEffect(() => {
            setFieldValue(
              'fullname',
              item?.user_id ? item?.card_holder_name : values?.fullname,
            );
            setFieldValue(
              'country',
              item?.user_id ? item?.country : values?.country,
            );
          }, []);
          return (
            <View style={{flexGrow: 0.97}}>
              <KeyboardAwareScrollView style={{flexGrow: 0.97}}>
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
                  value={item?.name ? item?.name : values?.fullname}
                  onChangeText={handleChange('fullname')}
                  renderErrorMessage={true}
                  errorMessage={errors?.fullname}
                  touched={touched?.fullname}
                />
                <AppInput
                  title={'Country'}
                  placeholder={'Type here'}
                  placeholderTextColor={colors.g3}
                  value={values?.country}
                  onChangeText={handleChange('country')}
                  renderErrorMessage={true}
                  errorMessage={errors?.country}
                  touched={touched?.country}
                />
                {/* <PaymentInput
          title={'Card Number'}
          onCardChange={() => {}}
          onFocus={() => {}}
        /> */}
              </KeyboardAwareScrollView>
              <AppButton
                width={WP('85')}
                title={'Update Card'}
                bgColor={colors.b1}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          );
        }}
      </Formik>
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default EditCard;
