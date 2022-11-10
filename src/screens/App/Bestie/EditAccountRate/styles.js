import {StyleSheet} from 'react-native';
import {WP, family, colors, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 0.9,
  },
  buttonContainer: {
    padding: WP('3'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: family.Poppin_Regular,
    color: colors.g12,
    size: size.text_14,
    textAlign: 'right',
    marginHorizontal: WP('6'),
    marginTop: WP('-4'),
  },
  iconStyle: {
    height: 21,
    width: 10,
  },
});

export {styles};
