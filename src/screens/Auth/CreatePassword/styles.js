import {StyleSheet} from 'react-native';
import {colors, size, family, WP} from '../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btCon: {
    alignSelf: 'center',
    marginVertical: WP('30'),
  },
});
export default styles;
