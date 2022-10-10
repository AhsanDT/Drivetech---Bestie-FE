import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';
import {AppButton} from '../../components/AppButton/AppButton';
import {colors, family, size, WP} from '../../shared/exporter';
import {appImages, appLogo} from '../../shared/theme/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={appImages.introBackground}
      style={styles.backgroundImage}
      resizeMode="cover">
      {/* <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      /> */}
      <View style={styles.logoContainer}>
        <Image
          source={appLogo.BestieTextLogo}
          resizeMode="contain"
          style={styles.logoStyle}
        />
        <Text style={styles.textStyle}>
          Let Us Help You Find Your{'\n'}Bestie
        </Text>
      </View>
      <AppButton
        bgColor={colors.b1}
        width={WP('90')}
        title={'Get Started'}
        style={styles.btnContainer}
        onPress={() => {
          navigation.replace('Auth', {screen: 'Login'});
        }}
      />
      <View style={styles.accountContainer}>
        <Text style={styles.accountStyles}>
          Don't have an account?{' '}
          <Text
            style={styles.signUpStyle}
            onPress={() => {
              navigation.navigate('Auth', {screen: 'SignUp'});
            }}>
            Sign Up
          </Text>
        </Text>
      </View>

      <Text style={styles.BottomTextStyle}>
        By signing in to you account, you agree to our {'\n'}
        <Text
          style={styles.termStyle}
          onPress={() => {
            navigation.replace('Auth', {screen: 'Login'});
          }}>
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
    </ImageBackground>
  );
};

export default Splash;
