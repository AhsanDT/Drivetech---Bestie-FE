import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p1,
  },
  logoStyle: {
    width: WP('51.5'),
    height: WP('22'),
  },
  logoTxtStyle: {
    marginTop: WP('5'),
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Semibold,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
