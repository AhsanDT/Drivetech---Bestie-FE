import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors, HP, WP} from '../../../shared/exporter';
import {appImages, appLogo} from '../../../shared/theme/assets';
import styles from './styles';
import {updateSignupObject} from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

const Splash = ({navigation}) => {
  const [role, setrole] = useState('');
  const dispatch = useDispatch();
  const handleButton = (index, type) => {
    console.log('TYPE==> ', type);
    if (index == 1) {
      setrole('user');
      dispatch(updateSignupObject({profileType: type}));
      console.log('role==> ', role);

      navigation.navigate('Auth', {screen: 'SignUp'});
    } else if (index == 2) {
      setrole('bestie');
      dispatch(updateSignupObject({profileType: type}));
      console.log('role==>2 ', role);

      navigation.navigate('Auth', {screen: 'RegisterBestie'});
    }
  };

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
        <Text style={styles.textStyle}>Let Us Help You Find Your Bestie</Text>
      </View>
      <TouchableOpacity onPress={() => handleButton(1, 'user')}>
        <View
          style={[
            styles.splashButton,
            {
              backgroundColor: role == 'user' ? '#000' : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.splashButtonText,
              {color: role == 'user' ? '#fff' : '#000'},
            ]}>
            Find a Bestie
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButton(2, 'bestie')}>
        <View
          style={[
            styles.splashButton,
            {backgroundColor: role == 'bestie' ? '#000' : '#fff'},
          ]}>
          <Text
            style={[
              styles.splashButtonText,
              {color: role == 'bestie' ? '#fff' : '#000'},
            ]}>
            Be a Bestie
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.accountContainer}>
        <Text style={styles.accountStyles}>
          Already have an account?{' '}
          <Text
            style={styles.signUpStyle}
            onPress={() => {
              navigation.navigate('Auth', {screen: 'ShowTalent'});
            }}>
            Sign In
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
