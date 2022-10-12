import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, AppLoader} from '../../../components';
import {
  colors,
  WP,
  ForgotPasswordVS,
  forgotFormFields,
  size,
  family,
  appIcons,
  networkText,
  checkConnected,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {forgotPassRequest} from '../../../redux/actions';

const ForgotPassword = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const onPressVerifyAccount = async value => {
    const check = await checkConnected();
    if (check) {
      setloading(true);
      const data = new FormData();
      data.append('email', value.email);
      try {
        const cbSuccess = response => {
          navigation.navigate('CreatePassword', {email: value.email});
          setloading(false);
        };
        const cbFailure = err => {
          Alert.alert('' || err);
          setloading(false);
        };
        dispatch(forgotPassRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
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
