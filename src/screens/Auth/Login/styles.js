import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: WP('3'),
    marginVertical: WP('6'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Spacer: {
    height: 2,
    width: WP('42'),
    backgroundColor: colors.g1,
  },
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  OrTextStyle: {
    fontSize: size.text_14,
    colors: colors.g5,
    fontFamily: family.Poppin_SemiBold,
    textAlign: 'center',
    marginVertical: WP('-2.5'),
  },
  imageCon: {
    height: WP('60'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: '50%',
    width: '35%',
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: size.text_24,
    color: colors.b1,
    fontFamily: family.Poppin_Medium,
  },
  googleStyle: {
    height: WP('10'),
    width: WP('10'),
    marginRight: 2,
  },
  fbIconStyle: {
    height: WP('10'),
    width: WP('10'),
    marginLeft: 5,
  },
  appleStyle: {
    height: WP('10'),
    width: WP('10'),
    marginLeft: 5,
  },
  btnTextStyle: {
    fontSize: size.text_12,
    fontFamily: family.Poppin_Medium,
    color: colors.g3,
  },
  forgotTextContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 35,
    marginTop: -4,
  },
  forgotText: {
    color: colors.red1,
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_12,
    marginHorizontal: WP('5'),
  },
  footerText: {
    textAlign: 'center',
    color: colors.b3,
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_12,
    marginVertical: WP('7'),
  },
  btnCon: {
    width: '100%',
    marginVertical: 20,
  },
  accountStyles: {
    fontSize: size.text_12,
    color: colors.white,
    fontFamily: family.Poppin_Regular,
    textAlign: 'center',
  },

  signUpStyle: {
    fontFamily: family.Poppin_Bold,
    fontWeight: 'bold',
  },
  termStyle: {
    color: colors.bl,
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_12,
  },

  BottomTextStyle: {
    textAlign: 'center',
    color: colors.b2,
    marginVertical: WP('2.5'),
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
  },
});

export default styles;
