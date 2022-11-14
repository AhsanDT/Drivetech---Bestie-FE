import React, {useState} from 'react';
import {View, SafeAreaView, Alert, StatusBar} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
  Header,
} from '../../../components';
import {
  colors,
  WP,
  ForgotPasswordVS,
  forgotFormFields,
  networkText,
  checkConnected,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {forgotPassRequest} from '../../../redux/actions';

const ForgotPassword = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch(null);

  const onPressVerifyAccount = async value => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      const data = new FormData();
      data.append('email', value.email?.toLowerCase());
      try {
        const cbSuccess = response => {
          console.log('RESPONSE==> ', response);
          navigation.navigate('ChanePasswordVerifyOtp', {
            email: value.email,
            userId: response?.data?.id,
          });
          setloading(false);
          console.log('data id', response?.data?.id);
        };
        const cbFailure = err => {
          setloading(false);
          Alert.alert('' || err);
        };
        dispatch(forgotPassRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      setloading(false);

      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Change Password'} backIcon />
        <Formik
          initialValues={forgotFormFields}
          onSubmit={values => {
            onPressVerifyAccount(values);
          }}
          validationSchema={ForgotPasswordVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <AppInput
                title={'Email Address'}
                placeholder={'Enter your email address'}
                onChangeText={handleChange('email')}
                placeholderTextColor={colors.g3}
                value={values.email}
                touched={touched.email}
                errorMessage={errors.email}
                autoCapitalize="none"
                keyboardType={'email-address'}
              />
              <AppButton
                width={WP('90')}
                bgColor={colors.b1}
                title={'Verify Email'}
                height={WP('14')}
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.btCon}
              />
            </View>
          )}
        </Formik>
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;
