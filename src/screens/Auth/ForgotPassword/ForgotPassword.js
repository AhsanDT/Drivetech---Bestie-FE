import React, {useState} from 'react';
import {View, SafeAreaView, Alert, StatusBar} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, AppLoader} from '../../../components';
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
    const check = await checkConnected();
    if (check) {
      setloading(true);
      const data = new FormData();
      data.append('email', value.email);
      try {
        const cbSuccess = response => {
          navigation.navigate('VerifyOtp', {
            email: value.email,
            userId: response?.data?.id,
          });
          setloading(false);
          console.log('data id', response?.data?.id);
        };
        const cbFailure = err => {
          Alert.alert('' || err);
          setloading(false);
          console.log('1');
        };
        dispatch(forgotPassRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
        console.log('3');
      }
    } else {
      Alert.alert('Error', networkText);
      console.log('2');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          title={'Forgot Password?'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
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
                title={'Verify Account'}
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
