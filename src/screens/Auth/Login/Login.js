import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StatusBar,
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
  appIcons,
  checkConnected,
  networkText,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {
  loginRequest,
  socialLoginRequest,
  clearSignupObject,
} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const onPressSignIn = async value => {
    setloading(true);
    const check = await checkConnected();
    if (check) {
      const data = new FormData();
      data.append('user[email]', value.email?.toLowerCase());
      data.append('user[password]', value.password);
      try {
        const cbSuccess = response => {
          ref.current.resetForm();
          setloading(false);

          if (response?.data?.profile_type == 'bestie') {
            if (response?.data?.profile_completed) {
              navigation.replace('MainStack');
              dispatch(clearSignupObject());
            } else {
              navigation.navigate('Bestietack', {
                screen: 'UpdateProfileCameraDetails',
              });
            }
          } else {
            navigation.replace('MainStack');
          }
        };

        const cbFailure = err => {
          Alert.alert('' || 'Error', err);
          setloading(false);
          console.log('ERROR', err);
        };
        dispatch(loginRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        console.log('ERROR', error);
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
      setloading(false);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      askForPermissions();
    }
  }, []);

  const askForPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      getLocation();
    }
  };

  const getLocation = () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  };

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        // signOutGoogle();
      }
      const userInfo = await GoogleSignin.signIn();
      console.log('[Google userInfo]', userInfo);
      if (userInfo?.idToken) {
        handleSocialLogin(userInfo?.idToken, 'google');
      }
      // handleSocialLogin(userInfo?.idToken, 'google');

      // setGoogleUser(userInfo);
    } catch (error) {
      console.log('ERROR GOOGLE==> ', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const googleSignOut = async () => {
    GoogleSignin.signOut();
  };

  const facebookSignin = async () => {
    try {
      //signOutFacebook();
      if (Platform.OS === 'android') {
        LoginManager.setLoginBehavior('web_only');
      }
      // Attempt a login using the Facebook login dialog asking for default permissions.
      LoginManager.logInWithPermissions(['email', 'public_profile'])
        .then(res => {
          console.log('[Permission Granted]', res);
          if (res?.isCancelled) return;

          AccessToken.getCurrentAccessToken()
            .then(token => {
              console.log('[token]', token);
              handleSocialLogin(token?.accessToken, 'facebook');
            })
            .catch(error => console.log('error', error));
        })
        .catch(err => {
          alert(err);
        });
      // if (Platform.OS == 'android') {
      //   LoginManager.setLoginBehavior('web_only');
      // }
    } catch (err) {
      console.log('[facebook err]', err);
    }
  };

  const signOutFacebook = async () => {
    try {
      LoginManager.logOut();
    } catch (error) {
      console.error(error);
    }
  };
  const handleSocialLogin = (token, type) => {
    setloading(true);
    if (token) {
      try {
        let data = new FormData();
        data.append('provider', type);
        data.append('token', token);
        data.append('profile_type', 'user');

        const cbSuccess = res => {
          console.log('RES social ', res);
          if (res?.data?.profile_completed) {
            console.log('1');
            navigation.replace('MainStack');
            signOutFacebook();
            googleSignOut();
            dispatch(clearSignupObject());
          } else {
            navigation.navigate('SelectRole', {data: res?.data});
          }

          setloading(false);
        };
        const cbFailure = err => {
          alert(err || 'Please try with anyother account. Thanks');
          setloading(false);
        };

        dispatch(socialLoginRequest(data, cbSuccess, cbFailure));
      } catch (err) {
        setloading(false);
        console.log('[err]', err);
        alert(err || 'Please try with anyother account. Thanks');
      }
    } else {
      // signOutGoogle();
      // signOutFacebook();
      alert('Please login again.');
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={'#fff'}
          translucent={false}
          barStyle={'dark-content'}
        />
        <ScrollView>
          <AppHeader
            title={'Hi, Welcome Back! '}
            backIcon={true}
            onPressBack={() => {
              navigation.goBack();
            }}
          />
          <Formik
            innerRef={ref}
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
                  renderErrorMessage={errors.password}
                  textEntry={true}
                />

                <View style={styles.forgotTextContainer}>
                  <Text
                    style={styles.forgotText}
                    onPress={() => {
                      navigation.navigate('Forgot');
                      ref.current.resetForm();
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
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => googleSignIn()}>
              <Image source={appIcons.googleIcon} style={styles.googleStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => facebookSignin()}>
              <Image source={appIcons.fbIcon} style={styles.fbIconStyle} />
            </TouchableOpacity>
            {Platform.OS == 'ios' ? (
              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <Image source={appIcons.appleIcon} style={styles.appleStyle} />
              </TouchableOpacity>
            ) : null}
          </View>
          <Text style={styles.BottomTextStyle}>
            By signing in to you account, you agree to{'\n'} our
            <Text
              style={styles.termStyle}
              onPress={() => {
                navigation.navigate('Auth', {screen: 'PrivacyPolicy'});
              }}>
              {' '}
              Privacy Policy
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
          <AppLoader loading={loading} />

          <AuthFooter
            title={'Don’t have an account?'}
            subtitle={' Sign Up'}
            onPress={() => {
              navigation.navigate('Auth', {screen: 'SelectRole'});
            }}
          />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
