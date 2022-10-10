import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput} from '../../../components';
import {
  colors,
  WP,
  ForgotPasswordVS,
  forgotFormFields,
  size,
  family,
  appIcons,
} from '../../../shared/exporter';
import {Formik} from 'formik';

const ForgotPassword = ({navigation}) => {
  const onPressSignIn = e => {
    navigation.navigate('VerifyOtp');
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
            onPressSignIn(values);
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
            handleReset,
          }) => (
            <View>
              <AppInput
                title={'Email Address'}
                placeholder={'Enter your email address'}
                onChangeText={handleChange('email')}
                value={values.email}
                touched={touched.email}
                errorMessage={errors.email}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;
