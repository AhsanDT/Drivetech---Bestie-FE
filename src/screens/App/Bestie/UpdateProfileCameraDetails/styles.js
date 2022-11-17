import {StyleSheet} from 'react-native';
import {colors, WP, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: WP('100'),
  },
  inputContainerStyle: {
    height: WP('12.5'),
  },
  TextContainer: {
    width: WP('100'),
    alignItems: 'baseline',
  },
  cameraTextStyle: {
    paddingHorizontal: WP('5.5'),
    paddingBottom: WP('5'),
    color: colors.b1,
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_16,
  },
  modelTextStyle: {
    paddingHorizontal: WP('5'),
    paddingBottom: WP('1'),
    color: colors.b1,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
  },
  addTextStyle: {
    fontFamily: family.Poppin_Regular,
    color: colors.bl,
    fontSize: size.text_14,
    textAlign: 'right',
    marginHorizontal: WP('5'),
    top: -18,
  },
  buttonContainer: {
    padding: WP('4'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },
});

export {styles};
