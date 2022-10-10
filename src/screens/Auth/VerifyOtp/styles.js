import {StyleSheet} from 'react-native';
import {colors, family, size, WP, HP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginHorizontal: WP('6'),
    marginTop: WP('-3'),
  },
  headerTextStyle: {
    color: colors.b1,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
  },
  emailTextStyle: {
    color: colors.bl,
  },
  otpInputBox: {
    padding: WP('3'),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    backgroundColor: colors.g1,
    height: WP('15'),
    width: WP('15'),
    margin: 2,
    alignItems: 'center',
    borderRadius: 40,
    marginVertical: HP('5'),
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.g2,
  },
  txtStyle: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_18,
    textAlign: 'center',
    color: colors.bl,
  },
});

export default styles;
