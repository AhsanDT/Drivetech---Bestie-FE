import {StyleSheet} from 'react-native';
import {colors, size, family, WP} from '../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  btCon: {
    marginVertical: WP('10'),
  },
  verificationText: {
    color: colors.b1,
    fontFamily: family.Poppin_SemiBold,
    fontSize: size.text_16,
    lineHeight: WP('17'),
    paddingLeft: WP('6'),
  },
});
export default styles;
