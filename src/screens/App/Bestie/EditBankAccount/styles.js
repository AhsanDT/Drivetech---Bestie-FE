import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 15,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_SemiBold,
  },
  inputContainerStyle: {
    width: WP('40'),
  },
  bottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WP('100'),
  },
  disableInput: {
    backgroundColor: colors.g2,
    width: WP('90%'),
    alignSelf: 'center',
    height: WP('12'),
    borderRadius: 25,
    justifyContent: 'center',
  },
  disableInputText: {
    paddingLeft: WP('7'),
    color: colors.g3,
    paddingHorizontal: WP('6'),
    marginBottom: 8,
    color: '#808080',
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
    // paddingTop: WP('5'),
  },
  disableText: {
    paddingLeft: 25,
    color: colors.g3,
    fontFamily: family.Poppin_Regular,
  },
});

export {styles};
