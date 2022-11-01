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
    overflow: 'hidden',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  inputStyle: {
    backgroundColor: colors.g2,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    textAlignVertical:"top",
    alignSelf:"flex-start"
    // marginTop: WP('-65'),
  },
  imageContainer: {
    padding: WP('2'),
    // flex: 0.5,
    alignItems: 'center',
  },
  proofIconStyle: {
    height: 48,
    width: 47,
  },
  proofTextStyle: {
    fontSize: size.text_14,
    // lineHeight: 28,
    color: colors.g16,
    fontFamily: family.Poppin_Regular,
    textAlign: 'center',
  },
  imageStyle: {
    height: WP('40'),
    width: WP('40'),
    alignSelf: 'center',
  },
});

export {styles};
