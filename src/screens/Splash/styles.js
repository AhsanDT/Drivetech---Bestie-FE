import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p1,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
  },
  logoTxtStyle: {
    marginTop: WP('5'),
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Semibold,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: WP('135'),
  },

  accountContainer: {
    marginTop: WP('8'),
  },

  textStyle: {
    fontSize: size.h6,
    fontFamily: family.Poppin_Bold,
    color: colors.white,
    textAlign: 'center',
    marginVertical: WP('5'),
  },

  accountStyles: {
    fontSize: size.tiny,
    color: colors.white,
    fontFamily: family.Poppin_Regular,
    textAlign: 'center',
  },

  signUpStyle: {
    fontFamily: family.Poppin_Bold,
    fontWeight: 'bold',
  },
  termStyle: {
    textDecorationLine: 'underline',
  },

  BottomTextStyle: {
    textAlign: 'center',
    fontSize: size.tiny,
    color: colors.white,
    marginVertical: WP('4.5'),
    fontFamily: family.Poppin_Medium,
  },
});

export default styles;
