import {StyleSheet} from 'react-native';
import {colors, size, WP, family, scrWidth} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {
    width: WP('30'),
    height: WP('12'),
    borderRadius: WP('20'),
    // alignSelf: 'flex-end',
    marginBottom: WP('8'),
    marginLeft: WP('56'),
    marginVertical: WP('4'),
  },
  menuContainer: {
    width: '100%',
    position: 'relative',
  },
  menuStyle: {
    marginLeft: 12,
    borderRadius: 15,
    height: WP('35'),
    width: scrWidth / 1.1,
    marginTop: -24,
  },
  menuItemStyle: {
    height: WP('8'),
  },
  menuTxtStyle: {
    left: 10,
    color: colors.g3,
    marginTop: WP('4'),
    fontSize: size.xsmall,
    fontFamily: family.Poppin_Regular,
  },
  dropContainer: {
    marginBottom: WP('7'),
  },
});
export default styles;
