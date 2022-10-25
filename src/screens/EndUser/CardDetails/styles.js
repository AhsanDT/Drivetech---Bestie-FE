import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 15,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_SemiBold,
  },
  inputContainerStyle: {
    width: WP('40'),
  },
  bottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WP('100'),
    //   alignSelf: 'center',
  },
});

export {styles};
