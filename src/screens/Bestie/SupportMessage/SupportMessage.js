import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, Header} from '../../../components';
import {appIcons, colors, family, size, WP} from '../../../shared/exporter';
import {styles} from './styles';

const SupportMessage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header title={'Message'} backIcon={true} />
        <AppInput
          multiline={true}
          inputContainerStyle={styles.inputContainerStyle}
          title={'Your Message'}
          placeholder={'Type here'}
          placeholderTextColor={colors.g3}
          inputStyle={styles.inputStyle}
        />

        <View style={styles.imageContainer}>
          <Image
            source={appIcons.proof}
            style={styles.proofIconStyle}
            resizeMode={'contain'}
          />
          <Text style={styles.proofTextStyle}>Attach Image or Proof</Text>
        </View>
        <AppButton
          title={'Send Message'}
          bgColor={colors.b1}
          width={WP('90')}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SupportMessage;
