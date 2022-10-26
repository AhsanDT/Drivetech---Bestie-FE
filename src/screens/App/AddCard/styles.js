import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    paddingHorizontal: WP('8'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },

  keyboardContainer: {
    flexGrow: 0.95,
  },
});

export {styles};
