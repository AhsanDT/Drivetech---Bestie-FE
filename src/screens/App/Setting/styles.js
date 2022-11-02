import {StyleSheet} from 'react-native';
import {colors, family, WP, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white2,
  },
  bottonContainer: {
    flexDirection: 'row',
    width: WP('45'),
    padding: WP('4'),
    backgroundColor: colors.orange,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginTop: WP('20'),
    marginVertical: WP('10'),
    // bottom: 20,
  },
  listContainer: {
    width: WP('95'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 13,
  },
  iconStyle: {
    height: 22,
    width: 22,
  },
  logOutTextStyle: {
    fontFamily: family.Poppin_SemiBold,
    fontSize: size.text_14,
    color: colors.red2,
    marginHorizontal: 8,
  },
});

export {styles};
