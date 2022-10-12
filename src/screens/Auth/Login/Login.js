import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, AuthFooter} from '../../../components';
import {
  colors,
  WP,
  LoginVS,
  loginFormFields,
  size,
  family,
  appIcons,
} from '../../../shared/exporter';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  const onPressSignIn = e => {
    navigation.navigate('Splash');
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          title={'Hi, Welcome Back! '}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <Formik
          initialValues={loginFormFields}
          onSubmit={values => {
            onPressSignIn(values);
          }}
          validationSchema={LoginVS}>
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
                placeholderTextColor={colors.g3}
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                value={values.email}
                touched={touched.email}
                errorMessage={errors.email}
              />
              <AppInput
                title={'Password'}
                placeholder={'Enter your password'}
                onChangeText={handleChange('password')}
                placeholderTextColor={colors.g3}
                value={values.password}
                touched={touched.password}
                errorMessage={errors.password}
                renderErrorMessage={errors.password}
                textEntry={true}
              />

              <View style={styles.forgotTextContainer}>
                <Text
                  style={styles.forgotText}
                  onPress={() => {
                    navigation.navigate('Forgot');
                  }}>
                  Forgot your password?
                </Text>
              </View>
              <AppButton
                width={WP('90')}
                bgColor={colors.b1}
                title={'Sign In'}
                height={WP('14')}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
        <View style={styles.contentContainer}>
          <View style={styles.Spacer} />
          <Text style={styles.OrTextStyle}>or</Text>
          <View style={styles.Spacer} />
        </View>
        <View style={styles.IconContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.googleIcon} style={styles.googleStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.fbIcon} style={styles.fbIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.appleIcon} style={styles.appleStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.BottomTextStyle}>
          By signing in to you account, you agree to{'\n'} our
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.replace('Auth', {screen: 'Login'});
            }}>
            {' '}
            Privacy & Policy
          </Text>
          <Text> and </Text>
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.navigate('Auth', {screen: 'TermsConditions'});
            }}>
            Terms & Conditions.
          </Text>
        </Text>
        <AuthFooter
          title={'Dont have an account?'}
          subtitle={' Sign Up'}
          onPress={() => {
            navigation.navigate('Auth', {screen: 'SignUp'});
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
