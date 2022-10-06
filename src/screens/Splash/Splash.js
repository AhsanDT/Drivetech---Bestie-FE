import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';
import {appImages, appLogo} from '../../shared/theme/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      // navigation.replace('Walkthrough');
    }, 2500);
  };

  return (
    // <View>
    <ImageBackground
      source={appImages.introBackground}
      style={styles.backgroundImage}
      resizeMode="cover">
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Image
        source={appLogo.BestieTextLogo}
        resizeMode="contain"
        style={{alignSelf: 'center'}}
      />
    </ImageBackground>
    // </View>
  );
};

export default Splash;
