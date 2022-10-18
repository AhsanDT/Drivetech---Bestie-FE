import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {AppButton, AppHeader} from '../../../components';
import {colors, HP, WP} from '../../../shared/exporter';
import styles from './styles';
const TermsConditions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader
        title={'Terms & Conditions'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            Welcome to Bestie! {'\n'}
            These terms and conditions outline the rules and regulations for the
            use of Bestie's Website, located at www.bestie.com. By accessing
            this website we assume you accept these terms and conditions. Do not
            continue to use Bestie if you do not agree to take all of the terms
            and conditions stated on this page. The following terminology
            applies to these Terms and Conditions, Privacy Statement and
            Disclaimer Notice and all Agreements: "Client", "You" and "Your"
            refers to you, the person log on this website and compliant to the
            Company’s terms and conditions. "The Company", "Ourselves", "We",
            "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
            refers to both the Client and ourselves. All terms refer to the
            offer, acceptance and consideration of payment necessary to
            undertake the process of our assistance to the Client in the most
            appropriate manner for the express purpose of meeting the Client’s
            needs in respect of provision of the Company’s stated services, in
            accordance with and subject to, prevailing law of Netherlands. Any
            use of the above terminology or other words in the.
          </Text>
        </View>
        <View style={{bottom: 10, marginTop: HP('2')}}>
          <AppButton
            bgColor={colors.b1}
            width={WP('90')}
            height={WP('14')}
            title={'I Accept'}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsConditions;
