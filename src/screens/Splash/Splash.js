import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';
import {AppButton} from '../../components/AppButton/AppButton';
import {colors, family, size, WP} from '../../shared/exporter';
import {appImages, appLogo} from '../../shared/theme/assets';
import styles from './styles';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const {isLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      console.log('');
      if (isLoggedIn) {
        // props.navigation.replace('Home', {
        //   screen: 'Home',
        // });
        navigation.replace('MainStack');
      } else {
        // dispatch(resetAllStateAction());
        navigation.replace('Auth');
      }
    }, 1500);
  }, []);

  return (
    <ImageBackground
      source={appImages.introBackground}
      style={styles.backgroundImage}
      resizeMode="cover">
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.logoContainer}>
        <Image
          source={appLogo.BestieTextLogo}
          resizeMode="contain"
          style={styles.logoStyle}
        />
        <Text style={styles.HiBestieTextStyle}>Hi Bestie</Text>
        <Text style={styles.textStyle}>
          Let Us Help You Find Your Bestie
        </Text>
      </View>
      {/* <AppButton
        bgColor={colors.b1}
        width={WP('90')}
        title={'Get Started'}
        style={styles.btnContainer}
        onPress={() => {
          navigation.navigate('SelectRole');
        }}
      /> */}
      {/* <View style={styles.accountContainer}>
        <Text style={styles.accountStyles}>
          Don't have an account?{' '}
          <Text
            style={styles.signUpStyle}
            onPress={() => {
              navigation.navigate('SelectRole');
            }}>
            Sign Up
          </Text>
        </Text>
      </View> */}
      {/* <View style={styles.footerContainer}>
        <Text style={styles.BottomTextStyle}>
          By signing in to you account, you agree to our {'\n'}
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.navigate('Auth', {screen: 'PrivacyPolicy'});
            }}>
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
      </View> */}
    </ImageBackground>
  );
};

export default Splash;
