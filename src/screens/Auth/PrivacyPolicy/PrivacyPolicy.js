import React, {useState, useEffect} from 'react';
import {Text, View, Alert, ScrollView, SafeAreaView} from 'react-native';
import {
  Spacer,
  AppHeader,
  AppLoader,
  BackHeader,
  MyStatusBar,
} from '../../../components';
// import RenderHtml from 'react-native-render-html';
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
      {/* <AppLoader loading={loading} /> */}
      {/* <MyStatusBar /> */}
      <AppHeader backIcon title={'Privacy Policy'} />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.policyText}>
            Please read Privacy Policy{'\n'} Reservation of Rights{'\n'} We
            reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.{'\n'} Removal of links
            from our website{'\n'} If you find any link on our Website that is
            offensive for any reason, you are free to contact and inform us any
            moment. We will consider requests to remove links but we are not
            obligated to or so or to respond to you directly. We do not ensure
            that the information on this website is correct, we do not warrant
            its completeness or accuracy; nor do we promise to ensure that the
            website remains available or that the material on the website is
            kept up to date. Disclaimer To the maximum extent permitted by
            applicable law, we exclude all representations, warranties and
            conditions relating to our website and the use of this website.
            Nothing in this disclaimer will:
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
