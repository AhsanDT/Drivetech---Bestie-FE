import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  AppLoader,
  DiscardModal,
  Header,
  ImagePickerModal,
  PaymentInput,
  DropDown,
} from '../../../../components';
import {
  colors,
  WP,
  checkConnected,
  networkText,
  AddBankAccount,
  addBankAccountFields,
  Currency_List,
} from '../../../../shared/exporter';
import {createToken} from '@stripe/stripe-react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {addBankRequest} from '../../../../redux/actions';
import {Formik} from 'formik';

const AddCard = ({navigation}) => {
  const [show, setShow] = useState(false);

  const [loading, setloading] = useState(false);
  const [currency, setcurrency] = useState('USD');

  const dispatch = useDispatch();
  const ref = useRef();

  const onPressSaveCard = async values => {
    const check = await checkConnected();
    if (check) {
      try {
        // setloading(true);
        const data = await createToken({
          type: 'BankAccount',
          setupFutureUsage: 'OffSession',
          accountHolderName: values?.fullname,
          accountNumber: values.bankAccNumber,
          country: values?.country,
          currency: currency,
          routingNumber: values.RoutingNumber,
        });
        console.log('BANK TOKEN', data);

        if (data) {
          var form = new FormData();
          form.append('account_holder_name', values?.fullname);
          form.append('country', values?.country);
          form.append('currency', currency);
          form.append('routing_number', values?.RoutingNumber);
          form.append('account_number', values?.bankAccNumber);
          form.append('default', true);

          const onSuccess = res => {
            setloading(false);
            // alert(res);
            console.log('On Add Card Success', res);
            // navigation.navigate('GetPaymentList');
          };
          const onFailure = res => {
            setloading(false);
            Alert.alert('Failed', 'Unable to proceed payment!');
            console.log('On Add Card Failure', res);
          };
          console.log('BANK TOEKN', data);
          dispatch(addBankRequest(form, onSuccess, onFailure));
        } else {
          setloading(false);
          Alert.alert('Failed', 'Unable to proceed payment!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={'Add Bank'}
        backIcon={true}
        onPressBack={() => {
          setShow(true);
        }}
      />

      <Formik
        innerRef={ref}
        initialValues={AddBankAccount}
        onSubmit={values => {
          onPressSaveCard(values);
        }}
        validationSchema={addBankAccountFields}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
          handleReset,
        }) => (
          <View style={{flexGrow: 0.95}}>
            <KeyboardAwareScrollView style={{flexGrow: 0.95}}>
              <DiscardModal
                show={show}
                onPressHide={() => setShow(false)}
                onPressDiscard={() => {
                  navigation.goBack();
                }}
                onPressCancel={() => {
                  setShow(false);
                }}
              />
              <Text style={styles.textStyle}>Bank Info</Text>
              <AppInput
                title={'Full Name'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                value={values?.fullname}
                onChangeText={handleChange('fullname')}
                errorMessage={errors.fullname}
                touched={touched.fullname}
                renderErrorMessage={true}
              />
              {/* <AppInput
                title={'Bank Name'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                value={values?.bankName}
                onChangeText={handleChange('bankName')}
                errorMessage={errors.bankName}
                touched={touched.bankName}
                renderErrorMessage={true}
              /> */}
              <AppInput
                title={'Country'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                value={values?.country}
                onChangeText={handleChange('country')}
                errorMessage={errors.country}
                touched={touched.country}
                renderErrorMessage={true}
              />
              <AppInput
                title={'Routing Number'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                value={values?.RoutingNumber}
                onChangeText={handleChange('RoutingNumber')}
                errorMessage={errors.RoutingNumber}
                touched={touched.RoutingNumber}
                renderErrorMessage={true}
                keyboardType="decimal-pad"
              />

              <AppInput
                title={'Bank Account Number'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                value={values?.bankAccNumber}
                onChangeText={handleChange('bankAccNumber')}
                errorMessage={errors.bankAccNumber}
                touched={touched.bankAccNumber}
                renderErrorMessage={true}
                keyboardType="decimal-pad"
              />
              <DropDown
                label={'Currency'}
                placeholder={'Select'}
                containerStyle={styles.dropContainer}
                options={Currency_List}
                value={currency}
                onChangeValue={text => {
                  setcurrency(text.value);
                }}
              />

              <AppButton
                style={{marginTop: 50}}
                width={WP('85')}
                title={'Save Bank'}
                bgColor={colors.b1}
                onPress={() => {
                  handleSubmit();
                }}
              />
              <View style={{height: 100}} />
            </KeyboardAwareScrollView>

            <AppLoader loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddCard;
