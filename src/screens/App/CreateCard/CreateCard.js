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
} from '../../../components';
import {
  colors,
  scrWidth,
  WP,
  checkConnected,
  networkText,
  payment_CardFormField,
  payment_CardVS,
} from '../../../shared/exporter';
import {createToken} from '@stripe/stripe-react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {addCardRequest} from '../../../redux/actions';
import {Formik} from 'formik';

const CreateCard = ({navigation}) => {
  const [show, setShow] = useState(false);

  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const onPressSaveCard = async values => {
    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        const data = await createToken({
          name: values?.fullname,
          type: 'Card',
          setupFutureUsage: 'OffSession',
        });
        if (data?.token?.id) {
          var form = new FormData();
          form.append('card[card_holder_name]', values?.fullname);
          form.append('card[token]', data?.token?.id);
          form.append('card[country]', values?.country);

          const onSuccess = res => {
            setloading(false);
            // alert(res);
            console.log('On Add Card Success', res);
            navigation.navigate('PaymentMethod');
          };
          const onFailure = res => {
            setloading(false);
            Alert.alert('Failed', 'Unable to proceed payment!');
            console.log('On Add Card Failure', res);
          };
          dispatch(addCardRequest(form, onSuccess, onFailure));
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
        title={'Add Card'}
        backIcon={true}
        onPressBack={() => {
          setShow(true);
        }}
      />

      <Formik
        innerRef={ref}
        initialValues={payment_CardFormField}
        onSubmit={values => {
          onPressSaveCard(values);
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
              <Text style={styles.textStyle}>Card Info</Text>

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
              <PaymentInput title={'Card Number'} />
            </KeyboardAwareScrollView>
            <AppButton
              width={WP('85')}
              title={'Save Card'}
              bgColor={colors.b1}
              onPress={() => {
                handleSubmit();
              }}
            />
            <AppLoader loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateCard;
