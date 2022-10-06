import React, {useState, useEffect} from 'react';
import {Text, View, Alert, ScrollView, SafeAreaView} from 'react-native';
import {
  Spacer,
  AppHeader,
  AppLoader,
  BackHeader,
  MyStatusBar,
} from '../../../components';
import RenderHtml from 'react-native-render-html';
import {
  WP,
  scrWidth,
  networkText,
  checkConnected,
} from '../../../shared/exporter';
import styles from './styles';

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <MyStatusBar />
      <AppHeader />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <BackHeader title="Privacy Policy" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* {privacyPolicy === '' ? (
            <Text style={styles.txtStyle} />
          ) : (
            <RenderHtml
              contentWidth={scrWidth}
              source={{html: privacyPolicy}}
            />
          )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
