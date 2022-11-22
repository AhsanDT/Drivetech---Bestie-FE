import React, {useState, useRef, useEffect} from 'react';
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
  editBankAccountFields,
  EditBankAccount,
  Currency_List,
  family,
  size,
} from '../../../../shared/exporter';
import {createToken} from '@stripe/stripe-react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {updateBankInfo} from '../../../../redux/actions';
import {Formik} from 'formik';

const AddCard = ({navigation, route}) => {
  const [show, setShow] = useState(false);

  const [loading, setloading] = useState(false);
  const [currency, setcurrency] = useState('USD');
  const [data, setdata] = useState(route?.params?.params);
  const dispatch = useDispatch();
  const ref = useRef();

  const onPressSaveCard = async values => {
    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        var form = new FormData();
        form.append('account_holder_name', values?.fullname);
        const onSuccess = res => {
          alert(res?.message);
          setloading(false);
          navigation.navigate('GetPaymentList');
        };
        const onFailure = res => {
          setloading(false);
        };
        dispatch(updateBankInfo(form, data?.id, onSuccess, onFailure));
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
        title={'Edit Bank Account'}
        backIcon={true}
        onPressBack={() => {
          setShow(true);
        }}
      />
      <Formik
        innerRef={ref}
        initialValues={EditBankAccount}
        onSubmit={values => {
          onPressSaveCard(values);
        }}
        validationSchema={editBankAccountFields}>
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
            setFieldValue('fullname', data?.account_holder_name);
          }, []);
          return (
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
                  onPressUpdate={() => {
                    handleSubmit();
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

                <Text style={styles.disableInputText}>Country</Text>
                <View style={styles.disableInput}>
                  <Text style={styles.disableText}>{data?.country}</Text>
                </View>
                <Text style={[styles.disableInputText, {marginTop: WP('7')}]}>
                  Bank Name
                </Text>
                <View style={styles.disableInput}>
                  <Text style={styles.disableText}>{data?.bank_name}</Text>
                </View>

                <Text style={[styles.disableInputText, {marginTop: WP('7')}]}>
                  Routing Number
                </Text>
                <View style={styles.disableInput}>
                  <Text style={styles.disableText}>{data?.routing_number}</Text>
                </View>
                <Text style={[styles.disableInputText, {marginTop: WP('7')}]}>
                  Currency
                </Text>
                <View style={styles.disableInput}>
                  <Text style={styles.disableText}>{data?.currency}</Text>
                </View>
                <Text style={[styles.disableInputText, {marginTop: WP('7')}]}>
                  Bank Account Number
                </Text>
                <View style={styles.disableInput}>
                  <Text style={styles.disableText}>{data?.account_number}</Text>
                </View>

                <AppButton
                  style={{marginTop: WP('15')}}
                  width={WP('85')}
                  title={'Update Bank'}
                  bgColor={colors.b1}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
                <View style={{height: 100}} />
              </KeyboardAwareScrollView>

              <AppLoader loading={loading} />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default AddCard;
