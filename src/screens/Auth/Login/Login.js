import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  AuthFooter,
  AppLoader,
} from '../../../components';
import {
  colors,
  WP,
  LoginVS,
  loginFormFields,
  size,
  family,
  appIcons,
  checkConnected,
  networkText,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {loginRequest} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const onPressSignIn = async value => {
    const check = await checkConnected();
    if (check) {
      setloading(true);
      const data = new FormData();
      data.append('user[email]', value.email);
      data.append('user[password]', value.password);
      try {
        const cbSuccess = response => {
          alert('Logged in Successfuly');
          setloading(false);
        };
        const cbFailure = err => {
          Alert.alert('' || err);
          setloading(false);
        };
        dispatch(loginRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
    }
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
                autoCapitalize="none"
              />
              <AppInput
                title={'Password'}
                placeholder={'Enter your password'}
                onChangeText={handleChange('password')}
                placeholderTextColor={colors.g3}
                value={values.password}
                touched={touched.password}
                errorMessage={errors.password}
                // secureTextEntry={true}
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
              navigation.replace('Auth', {screen: 'Login'});
            }}>
            Terms & Conditions.
          </Text>
        </Text>

        <AuthFooter
          title={'Dont have an account?'}
          subtitle={' Sign Up'}
          onPress={() => {
            navigation.replace('Auth', {screen: 'SignUp'});
          }}
        />
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
