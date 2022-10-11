import {StyleSheet} from 'react-native';
import {colors, family, WP, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textContainer: {
    padding: WP('4'),
  },
  textStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
    color: colors.b1,
    lineHeight: 20,
  },
});

export default styles;
