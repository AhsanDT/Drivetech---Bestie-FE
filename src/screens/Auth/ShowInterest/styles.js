import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_16,
    color: colors.b1,
    paddingHorizontal: WP('5'),
  },
  flatList: {
    alignSelf: 'center',
  },
  contentContainerStyle: {
    // backgroundColor: 'red',
    // alignSelf: 'center',
    // alignItems: 'center',
  },
});

export default styles;
