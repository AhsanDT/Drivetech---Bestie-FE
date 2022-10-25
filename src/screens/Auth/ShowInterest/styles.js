import {StyleSheet} from 'react-native';
import {WP, colors, size, family, HP} from '../../../shared/exporter';
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
    flexGrow: 0.9,
  },
  contentContainerStyle: {
    // backgroundColor: 'pink',
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  showAllView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP('3'),
  },
  arrow: {
    height: 28,
    width: 18,
    marginLeft: 5,
  },
  showText: {
    color: colors.b1,
    fontFamily: family.Poppin_Regular,
    paddingLeft: WP('5'),
  },
});

export default styles;
