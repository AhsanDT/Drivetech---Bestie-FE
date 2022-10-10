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
    width: WP('40'),
    backgroundColor: colors.g1,
  },
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  OrTextStyle: {
    fontSize: size.xsmall,
    colors: colors.b1,
    fontFamily: family.Poppin_Medium,
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
    fontSize: size.h4,
    color: colors.b1,
    fontFamily: family.Gilroy_Bold,
  },
  googleStyle: {
    height: WP('12'),
    width: WP('12'),
    marginRight: 2,
  },
  fbIconStyle: {
    height: WP('12'),
    width: WP('12'),
    marginLeft: 5,
  },
  appleStyle: {
    height: WP('12'),
    width: WP('12'),
    marginLeft: 5,
  },
  btnTextStyle: {
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
    color: colors.g3,
  },
  forgotText: {
    color: colors.red,
    fontFamily: family.Poppin_Medium,
    fontSize: size.tiny,
    marginBottom: 50,
    marginTop: -18,
    marginHorizontal: WP('5'),
    textAlign: 'right',
  },
  footerText: {
    textAlign: 'center',
    color: colors.b3,
    fontFamily: family.Poppin_Medium,
    fontSize: size.tiny,
    marginVertical: WP('7'),
  },
  btnCon: {
    width: '100%',
    marginVertical: 20,
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
    color: colors.bl,
    fontFamily: family.Poppin_Medium,
    fontSize: size.tiny,
  },

  BottomTextStyle: {
    textAlign: 'center',
    color: colors.b2,
    marginVertical: WP('2.5'),
    fontFamily: family.Poppin_Medium,
    fontSize: size.tiny,
  },
});

export default styles;
