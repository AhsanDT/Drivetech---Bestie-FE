import {StyleSheet} from 'react-native';
import {WP, colors, size, family, HP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p1,
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: WP('50'),
  },
  logoStyle: {
    alignSelf: 'center',
  },
  logoTxtStyle: {
    marginTop: WP('5'),
    color: colors.white,
    fontSize: size.text_16,
    fontFamily: family.Poppin_SemiBold,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: WP('125'),
  },

  accountContainer: {
    marginTop: WP('5'),
    // bottom: WP('7'),
    // position: 'absolute',
    // alignItems: 'center',
  },

  textStyle: {
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
    color: colors.white,
    textAlign: 'center',
  },

  accountStyles: {
    fontSize: size.text_12,
    color: colors.white,
    fontFamily: family.Poppin_Regular,
    textAlign: 'center',
  },

  signUpStyle: {
    fontFamily: family.Poppin_Bold,
  },
  termStyle: {
    textDecorationLine: 'underline',
  },

  BottomTextStyle: {
    textAlign: 'center',
    fontSize: size.text_12,
    color: colors.white,
    fontFamily: family.Poppin_Medium,
  },
  footerContainer: {
    padding: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: WP(-20),
  },
  splashButton: {
    backgroundColor: '#fff',
    marginTop: HP('2'),
    width: WP('80'),
    alignSelf: 'center',
    height: HP('13'),
    borderRadius: 20,
    justifyContent: 'center',
  },
  splashButtonText: {
    fontFamily: family.Poppin_SemiBold,
    paddingLeft: WP(5),
    fontSize: size.text_16,
  },
  HiBestieTextStyle: {
    fontSize: size.text_34,
    fontFamily: family.Poppin_Medium,
    color: colors.white,
    textAlign: 'center',
    marginVertical: WP('2'),
    marginTop: WP('20'),
  },
});

export default styles;
