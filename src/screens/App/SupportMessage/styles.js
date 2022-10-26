import {StyleSheet} from 'react-native';
import {colors, WP, family, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInputContainer: {},
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 3,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },
  inputContainerStyle: {
    width: WP('90'),
    height: WP('79'),
    borderRadius: 30,
    backgroundColor: colors.g2,
    paddingHorizontal: WP('4'),
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
  },
  inputStyle: {
    alignSelf: 'flex-start',
  },
  imageContainer: {
    padding: WP('2'),
    flex: 0.7,
    alignItems: 'center',
  },
  proofIconStyle: {
    height: 48,
    width: 47,
  },
  proofTextStyle: {
    fontSize: size.text_14,
    lineHeight: 28,
    color: colors.g16,
    fontFamily: family.Poppin_Regular,
  },
  imageStyle: {
    height: WP('40'),
    width: WP('40'),
    alignSelf: 'center',
  },
});

export {styles};
