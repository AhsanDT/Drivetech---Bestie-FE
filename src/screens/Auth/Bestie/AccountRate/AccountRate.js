import React from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import {AppButton, AppHeader, AppInput} from '../../../../components';
import {appIcons, colors, WP} from '../../../../shared/exporter';
import {styles} from './styles';

const AccountRate = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <AppHeader title={'Set Your\nRate'} />
        <View style={styles.textContainer}>
          <AppInput
            title={'Rate'}
            leftIcon={
              <Image
                source={appIcons.dollar}
                resizeMode={'contain'}
                style={styles.iconStyle}
              />
            }
          />
          <Text style={styles.textStyle}>/h</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Back'}
          width={WP('35')}
          height={WP('13')}
          bgColor={colors.g8}
          textColor={colors.g9}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <AppButton
          title={'Next'}
          width={WP('35')}
          height={WP('13')}
          bgColor={colors.b1}
          //   disabled={image ? false : true}
          //   onPress={() => {
          //     navigation.navigate('UploadImage');
          //   }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountRate;
